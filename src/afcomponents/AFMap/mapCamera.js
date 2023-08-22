import { GetFps } from './fps';

//相机飞行
export function flyToCamera(cameraList) {
  this.setStateP({
    animate: true,
  }).then(() => {
    if (cameraList[0]?.length < 1) {
      return false;
    }
    let frames = cameraList[0]?.frames;
    if (frames?.length < 2) {
      return false;
    }
    // console.log('cameraList', cameraList[0]);
    let flyOption = cameraList[0]?.option;
    if (flyOption?.flightSetIsTrue) {
      if (flyOption?.flightType === 0) {
        let allTime = flyOption?.flightTime;
        this.flightType0(cameraList[0], frames, allTime);
      } else if (flyOption?.flightType === 1) {
        let allTime = flyOption?.flightTime;
        this.flightType1(cameraList[0], frames, allTime);
      } else if (flyOption?.flightType === 2) {
        let allTime = flyOption?.flightTime;
        this.flightType2(cameraList[0], frames, allTime);
      } else if (flyOption?.flightType === 3) {
        let allTime = flyOption?.flightTime;
        this.flightType3(cameraList[0], frames, allTime);
      }
    }
  });
}

export function flightType3(camera, frames, allTime) {
  frames = frames.sort((a, b) => {
    return a?.id - b?.id;
  });
  let lonlatArr = [];
  for (const i in frames) {
    if (frames.hasOwnProperty(i)) {
      let camrea = frames[i]?.option?.viewCamera;
      if (camrea) {
        lonlatArr.push({
          ...camrea,
          flightTime: frames[i]?.option?.flightTime,
          stayTime: frames[i]?.option?.stayTime,
          id: frames[i]?.id,
        });
      } else {
        return false;
      }
    }
  }
  //回到原点
  if (camera?.option?.backToStart) {
    lonlatArr.push(frames[0]?.option.viewCamera);
  }
  // FlyToCamera
}

//沿线飞行
export function flightType1(camera, frames, allTime) {
  frames = frames.sort((a, b) => {
    return a?.id - b?.id;
  });
  let lonlatArr = [];
  for (const i in frames) {
    if (frames.hasOwnProperty(i)) {
      let camrea = frames[i]?.option?.viewCamera;
      if (camrea) {
        lonlatArr.push({
          ...camrea,
          flightTime: frames[i]?.option?.flightTime,
          stayTime: frames[i]?.option?.stayTime,
          id: frames[i]?.id,
        });
      } else {
        return false;
      }
    }
  }
  //回到原点
  if (camera?.option?.backToStart) {
    lonlatArr.push(frames[0]?.option.viewCamera);
  }
  let that = this;
  GetFps(fps => {
    flyTo();
    function flyTo() {
      // let trend = (allTime / (frames?.length - 1)) * fps;
      let arrNew = [];
      for (let i = 0; i < lonlatArr.length; i++) {
        if (i < lonlatArr.length - 1) {
          // console.log('asdflonlatArrasdfad', lonlatArr[i]);
          let trend = lonlatArr[i]?.flightTime * fps;
          let trendStay = lonlatArr[i]?.stayTime * fps;
          let y = (lonlatArr[i + 1]?.longitude - lonlatArr[i]?.longitude) / trend;
          let x = (lonlatArr[i + 1]?.latitude - lonlatArr[i]?.latitude) / trend;
          let bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
          if (
            lonlatArr[i]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing < lonlatArr[i]?.bearing
          ) {
            bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
          }

          if (
            lonlatArr[i]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing > 0 &&
            lonlatArr[i + 1]?.bearing > lonlatArr[i]?.bearing
          ) {
            bearing = (360 - (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing)) / trend;
          }

          let pitch = (lonlatArr[i + 1]?.pitch - lonlatArr[i]?.pitch) / trend;
          let zoom = (lonlatArr[i + 1]?.zoom - lonlatArr[i]?.zoom) / trend;

          for (let j = 0; j < trend; j++) {
            arrNew.push({
              longitude: lonlatArr[i]?.longitude + y * j,
              latitude: lonlatArr[i]?.latitude + x * j,
              bearing: Math.abs(bearing),
              pitch: lonlatArr[i]?.pitch + pitch * j,
              zoom: lonlatArr[i]?.zoom + zoom * j,
            });
          }
          for (let j = 0; j < trendStay; j++) {
            arrNew.push({});
          }
        }
      }

      // console.log('arrNew', arrNew);
      let n = 0;
      let animation = null; // eslint-disable-line no-unused-vars
      // let { animate } = this.state;
      let bearing = 0;
      function animateFly() {
        let viewport = arrNew[n++];
        // const { iviewState } = that.state;
        if (viewport && arrNew?.length > 0) {
          if (that.state.animate) {
            if (viewport?.longitude) {
              that.setState({
                iviewState: {
                  ...camera?.option.viewCamera,
                  longitude: viewport?.longitude,
                  latitude: viewport?.latitude,
                  pitch: viewport?.pitch,
                  zoom: viewport?.zoom,
                  bearing: 0 - bearing,
                  cameraLock: viewport?.cameraLock,
                  cameraLockType: viewport?.cameraLockType,
                },
              });
              that.map.setCenter([viewport?.longitude, viewport?.latitude]);
              that.map.setPitch(viewport?.pitch);
              that.map.setBearing(0 - bearing);
              that.map.setZoom(viewport?.zoom);

              that.cameraSc({
                ...camera?.option.viewCamera,
                longitude: viewport?.longitude,
                latitude: viewport?.latitude,
                bearing: 0 - bearing,
                pitch: viewport?.pitch,
                zoom: viewport?.zoom,
                cameraLock: viewport?.cameraLock,
                cameraLockType: viewport?.cameraLockType,
              });
              bearing = bearing + viewport?.bearing;
            } else {
            }
            animation = requestAnimationFrame(animateFly);
          } else {
            n = 0;
          }
        } else {
          if (camera?.option?.loopFlight) {
            flyTo();
          }
          // n = 0;
          // animation = requestAnimationFrame(animateFly);
          cancelAnimationFrame(animateFly);
        }
      }
      animateFly();
    }
  });
}

//沿线飞行
export function flightType0(camera, frames, allTime) {
  frames = frames.sort((a, b) => {
    return a?.id - b?.id;
  });
  let lonlatArr = [];
  for (const i in frames) {
    if (frames.hasOwnProperty(i)) {
      let camrea = frames[i]?.option?.viewCamera;
      if (camrea) {
        lonlatArr.push(camrea);
      } else {
        return false;
      }
    }
  }
  //回到原点
  if (camera?.option?.backToStart) {
    lonlatArr.push(frames[0]?.option.viewCamera);
  }
  let that = this;
  GetFps(fps => {
    flyTo();
    function flyTo() {
      let trend = (allTime / (frames?.length - 1)) * fps;
      let arrNew = [];
      for (let i = 0; i < lonlatArr.length; i++) {
        if (i < lonlatArr.length - 1) {
          let y = (lonlatArr[i + 1]?.longitude - lonlatArr[i]?.longitude) / trend;
          let x = (lonlatArr[i + 1]?.latitude - lonlatArr[i]?.latitude) / trend;
          let bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
          if (
            lonlatArr[i]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing < lonlatArr[i]?.bearing
          ) {
            bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
          }

          if (
            lonlatArr[i]?.bearing < 0 &&
            lonlatArr[i + 1]?.bearing > 0 &&
            lonlatArr[i + 1]?.bearing > lonlatArr[i]?.bearing
          ) {
            bearing = (360 - (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing)) / trend;
          }

          let pitch = (lonlatArr[i + 1]?.pitch - lonlatArr[i]?.pitch) / trend;
          let zoom = (lonlatArr[i + 1]?.zoom - lonlatArr[i]?.zoom) / trend;

          for (let j = 0; j < trend; j++) {
            arrNew.push({
              longitude: lonlatArr[i]?.longitude + y * j,
              latitude: lonlatArr[i]?.latitude + x * j,
              bearing: Math.abs(bearing),
              pitch: lonlatArr[i]?.pitch + pitch * j,
              zoom: lonlatArr[i]?.zoom + zoom * j,
            });
          }
        }
      }

      // console.log('arrNew', arrNew);
      let n = 0;
      let animation = null; // eslint-disable-line no-unused-vars
      // let { animate } = this.state;
      let bearing = 0;
      function animateFly() {
        let viewport = arrNew[n++];
        // const { iviewState } = that.state;
        if (viewport && arrNew?.length > 0) {
          if (that.state.animate) {
            if (viewport?.longitude) {
              that.setState({
                iviewState: {
                  ...camera?.option.viewCamera,
                  longitude: viewport?.longitude,
                  latitude: viewport?.latitude,
                  pitch: viewport?.pitch,
                  zoom: viewport?.zoom,
                  bearing: 0 - bearing,
                  cameraLock: viewport?.cameraLock,
                  cameraLockType: viewport?.cameraLockType,
                },
              });

              that.map.setCenter([viewport?.longitude, viewport?.latitude]);
              that.map.setPitch(viewport?.pitch);
              that.map.setBearing(0 - bearing);
              that.map.setZoom(viewport?.zoom);

              that.cameraSc({
                ...camera?.option.viewCamera,
                longitude: viewport?.longitude,
                latitude: viewport?.latitude,
                bearing: 0 - bearing,
                pitch: viewport?.pitch,
                zoom: viewport?.zoom,
                cameraLock: viewport?.cameraLock,
                cameraLockType: viewport?.cameraLockType,
              });
              bearing = bearing + viewport?.bearing;
            }
            animation = requestAnimationFrame(animateFly);
          } else {
            n = 0;
          }
        } else {
          if (camera?.option?.loopFlight) {
            flyTo();
          }
          // n = 0;
          // animation = requestAnimationFrame(animateFly);
          cancelAnimationFrame(animateFly);
        }
      }
      animateFly();
    }
  });
}
