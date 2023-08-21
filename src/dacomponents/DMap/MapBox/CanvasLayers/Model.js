import mapboxgl from 'mapbox-gl';
import BaseLayer from './base';

var THREE = window.THREE;

class ModelLayer {
  constructor(modelUrl, id) {
    this.modelUrl = modelUrl;
    this.id = id || '3d-model';
    this.type = 'custom';
    this.renderingMode = '3d';
    // parameters to ensure the model is georeferenced correctly on the map
    var modelOrigin = [116.40833174826086, 39.857323712408508];
    var modelAltitude = 0;
    var modelRotate = [Math.PI / 2, 0, 0];
    var modelScale = 5.41843220338983e-8;

    // transformation parameters to position, rotate and scale the 3D model onto the map
    this.modelTransform = {
      translateX: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x,
      translateY: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y,
      translateZ: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      scale: modelScale,
    };
  }

  onAdd (map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight);

    var directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

    // use the three.js GLTF loader to add the 3D model to the three.js scene
    var loader = new THREE.GLTFLoader();
    loader.load(
      this.modelUrl,
      function (gltf) {
        this.scene.add(gltf.scene);
      }.bind(this),
    );
    this.map = map;

    // use the Mapbox GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
    });

    this.renderer.autoClear = false;
  }
  render (gl, matrix) {
    const modelTransform = this.modelTransform;
    var rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      modelTransform.rotateX,
    );
    var rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      modelTransform.rotateY,
    );
    var rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      modelTransform.rotateZ,
    );

    var m = new THREE.Matrix4().fromArray(matrix);
    var l = new THREE.Matrix4()
      .makeTranslation(
        modelTransform.translateX,
        modelTransform.translateY,
        modelTransform.translateZ,
      )
      .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix.elements = matrix;
    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.state.reset();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  }
}

class Model extends BaseLayer {
  constructor(map, layername, mapStyle, option, id) {
    super();
    this.id = id;
    this.map = map;
    this.layername = layername;
    this.mapStyle = mapStyle;
    this.option = option;
    this.initLayer(option.modelUrl);
  }

  initLayer (modelUrl) {
    this.map.addLayer(new ModelLayer(modelUrl));
  }
}

export default Model;
