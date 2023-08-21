import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import mapboxgl from 'mapbox-gl';
// 自定义3D温度场
class CustomLayer {
    constructor(map, data) {
        this.id = '3d-model';
        this.type = 'custom';
        this.renderingMode = '3d';
        this.map = map;
        this.data = data;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.mesh = null;
        this.modelOrigin = [115.78669110059801, 40.5476230337743];
        this.modelAltitude = 3000;
        this.modelRotate = [Math.PI / 2, 0, 0];
        this.modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
            this.modelOrigin,
            this.modelAltitude
        );
        this.modelTransform = {
            translateX: mapboxgl.MercatorCoordinate.fromLngLat(this.modelOrigin, this.modelAltitude).x,
            translateY: mapboxgl.MercatorCoordinate.fromLngLat(this.modelOrigin, this.modelAltitude).y,
            translateZ: mapboxgl.MercatorCoordinate.fromLngLat(this.modelOrigin, this.modelAltitude).z,
            rotateX: this.modelRotate[0],
            rotateY: this.modelRotate[1],
            rotateZ: this.modelRotate[2],
            scale: this.modelAsMercatorCoordinate.meterInMercatorCoordinateUnits() * 1000
        };
    }
    onAdd(map, gl) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        let directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);
        let directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);
        // let loader = new GLTFLoader();
        // console.log(loader, 'loader')
        // loader.load('https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf', ((gltf) => {
        //     this.scene.add(gltf.scene);
        // }).bind(this));
        // this.objmap = map
        // this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
        // this.scene = new THREE.Scene();
        // this.camera.position.z = 5500;
        // this.camera.lookAt(0, 0, 0);
        // this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color(0xb0b0b0);
        // let ambientLight = new THREE.AmbientLight(0x222222);
        // this.scene.add(ambientLight);
        // let light1 = new THREE.DirectionalLight(0xffffff, 0.5);
        // light1.position.set(1, 1, 1);
        // this.scene.add(light1);
        this.creadMesh();
        this.renderer = new THREE.WebGLRenderer({
            canvas: map.getCanvas(),
            context: gl,
            antialias: true
        });
        this.renderer.autoClear = false;
    }
    render(gl, matrix) {
        let rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), this.modelTransform.rotateX);
        let rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), this.modelTransform.rotateY);
        let rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), this.modelTransform.rotateZ);
        let m = new THREE.Matrix4().fromArray(matrix);
        let l = new THREE.Matrix4().makeTranslation(this.modelTransform.translateX, this.modelTransform.translateY, this.modelTransform.translateZ)
            .scale(new THREE.Vector3(this.modelTransform.scale, -this.modelTransform.scale, this.modelTransform.scale))
            .multiply(rotationX)
            .multiply(rotationY)
            .multiply(rotationZ);

        this.camera.projectionMatrix.elements = matrix;
        this.camera.projectionMatrix = m.multiply(l);
        // console.log(this.renderer,'reanderer');
        this.renderer.state.reset();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
    }
    creadMesh() {
        let geometrys = new THREE.BufferGeometry();
        let material = new THREE.MeshPhongMaterial({
            specular: 0x111111, shininess: 250,
            side: THREE.FrontSide, vertexColors: true
        });
        let indices = [];
        let vertices = [];
        let normals = [];
        let colors = [];
        let size = 20;
        let segments = this.data.features.length;
        let halfSize = size / 2;//10
        let segmentSize = size / segments;//2
        let minx, miny;
        let minz, maxz;
        const WORLD_SIZE = Math.PI * 6378137;
     
        for (let i = 0; i < segments; i++) {
            let lngLat = this.data.features[i].geometry.coordinates
            let x = mapboxgl.MercatorCoordinate.fromLngLat(lngLat, 0).x * WORLD_SIZE;
            let y = mapboxgl.MercatorCoordinate.fromLngLat(lngLat, 0).y * WORLD_SIZE;
            let z = parseFloat(this.data.features[i].properties["T"]);
            if (i == 0) {
                minx = x;
                miny = y;
                x = 0;
                y = 0;
                minz = z;
                maxz = z;
            }
            else {
                x = x - minx;
                y = y - miny;
                minz = Math.min(minz, z);
                maxz = Math.max(maxz, z);
            }
            vertices.push(x, y, z);//生成顶点
            normals.push(0, 0, 0);//每个顶点的法向量
            colors.push(194, 0, 0);//每个顶点的颜色
        }
        for (let i = 0; i < segments * 3; i += 3) {
            let z = vertices[i + 2];
            // let k = (z-minz) / (maxz - minz);
            // colors[i] *= k;
            // colors[i+1] *= k;
            // colors[i+2] *= k;
            vertices[i + 2] = (z - minz) * 100;
        }
        let line = 110;
        for (let i = 0; i < line - 1; i++) {//行
            for (let j = 0; j < line - 1; j++) {//列
                let a = i * (line) + (j + 1);
                let b = i * (line) + j;
                let c = (i + 1) * (line) + j;
                let d = (i + 1) * (line) + (j + 1);
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
        geometrys.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(indices), 1));
        geometrys.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometrys.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        geometrys.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometrys.computeVertexNormals();
        this.mesh = new THREE.Mesh(geometrys, material);
        this.mesh.scale.multiplyScalar(0.1);//热力缩放
        this.mesh.rotation.x = -Math.PI / 2;
        // this.mesh.position.x = -1000;
        // this.mesh.position.y = -1000;
        this.mesh.position.z=-10;
        this.scene.add(this.mesh);
        let wireframeMaterial = material.clone();
        wireframeMaterial.wireframe = true;
        // wireframeMaterial.specular=new THREE.Color("#cccccc");
        wireframeMaterial.emissive = new THREE.Color("#82e6c1");//网格颜色
        wireframeMaterial.opacity = 0.5;
        let wireframeMesh = new THREE.Mesh(geometrys, wireframeMaterial);
        wireframeMesh.rotation.x = -Math.PI / 2;
        wireframeMesh.scale.multiplyScalar(0.1);//缩放
        // wireframeMesh.position.x = -1000;
        // wireframeMesh.position.y = -1000;
        wireframeMesh.position.z=-10;//
        this.scene.add(wireframeMesh);
    }
}
export default CustomLayer;
