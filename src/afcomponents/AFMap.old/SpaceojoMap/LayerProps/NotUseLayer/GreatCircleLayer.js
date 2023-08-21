import {
  layerScaleOrdinal,
  layerScalePoint,
  layerScaleQuantile,
} from '@/utils/layerutils/layerScale';
import { fildToArray, rgbToColorArr } from '../../utils';
export default function GreatCircleLayer() {
  let mapStyle = mapStyleConfig;
  let colorArray = mapStyle.color.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  let antitone = mapStyle.color.antitone;
  let { colorSection } = customGroup;
  // let colorArray = [];
  if (mapStyle.color.type === 2) {
    newColorArray = newColorArray.reverse();
    this.colorWidth = fildToArray(dataSource, mapStyle.color.feild, true);
    if (isNaN(Number(this.colorWidth[0]))) {
      this.x = layerScaleOrdinal(this.colorWidth, antitone ? newColorArray : colorArray);
    } else {
      this.x = layerScaleQuantile(this.colorWidth, antitone ? newColorArray : colorArray);
    }
  }
  if (mapStyle.line.type === 2) {
    let radiusMinPixels = mapStyle.line.radiusMinPixels;
    let radiusMaxPixels = mapStyle.line.radiusMaxPixels;
    let radiusWidth = fildToArray(dataSource, mapStyle.line.feild);
    this.y = layerScalePoint(radiusWidth, [radiusMinPixels, radiusMaxPixels]);
  }
  if (
    mapStyle.dataState.DXState &&
    mapStyle.dataState.DYState &&
    mapStyle.dataState.OXState &&
    mapStyle.dataState.OYState
  ) {
    for (let i in dataSource) {
      let properties = dataSource[i].properties;
      let DXState = properties[mapStyle.dataState.DXState];
      let DYState = properties[mapStyle.dataState.DYState];
      let OXState = properties[mapStyle.dataState.OXState];
      let OYState = properties[mapStyle.dataState.OYState];
      DXState = parseFloat(DXState);
      DYState = parseFloat(DYState);
      OXState = parseFloat(OXState);
      OYState = parseFloat(OYState);
      DXState = DXState ? DXState : 114;
      DYState = DYState ? DYState : 114;
      OXState = OXState ? OXState : 114;
      OYState = OYState ? OYState : 114;
      let obj = [OXState, OYState, DXState, DYState];
      dataSource[i].dataArr = obj;
    }
  } else {
  }
  let colorType = mapStyle.color.type;
  let radiusType = mapStyle.line.type;
  let sectionColor = colorSection.color;
  let sectionNumber = [];
  let sectionColorArr = [];
  if (sectionColor.type === 2) {
    let colorSectionArr = sectionColor.colorSectionArr;
    for (let i in colorSectionArr) {
      sectionNumber.push(colorSectionArr[i].number);
    }
    sectionNumber.sort((val1, val2) => {
      return val1 - val2;
    });
    for (let i in sectionNumber) {
      for (let j in colorSectionArr) {
        if (sectionNumber[i] === colorSectionArr[j].number) {
          sectionColorArr.push(colorSectionArr[j].color);
          break;
        }
      }
    }
  }
  if (mapStyle?.line?.dataReverse) {
    let doState = true;
    for (let elem of dataSource) {
      if (!isNaN(Number(elem.properties[[mapStyle?.line?.feild]])) && doState) {
        dataSource = dataSource.sort((a, b) => {
          return a.properties[(mapStyle?.line?.feild)] - b.properties[(mapStyle?.line?.feild)];
        });
        dataSource = dataSource.reverse();
        doState = false;
      }
    }
  } else {
    let doState = true;
    for (let elem of dataSource) {
      if (!isNaN(Number(elem.properties[[mapStyle?.line?.feild]])) && doState) {
        dataSource = dataSource.sort((a, b) => {
          return a.properties[(mapStyle?.line?.feild)] - b.properties[(mapStyle?.line?.feild)];
        });
        doState = false;
      }
    }
  }
  let layerConfig = {
    id: `great_circle-layer${layerId}`,
    data: dataSource,
    opacity: mapStyle.color.opacity,
    pickable: true,
    //   ...zoom,
    autoHighlight: true,
    widthScale: 1,
    widthMinPixels: radiusType === 1 ? 1 : mapStyle.line.radiusMinPixels,
    widthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.radiusMaxPixels * 1,
    getSourcePosition: d => {
      return [d.dataArr[0], d.dataArr[1]];
    },
    getTargetPosition: d => {
      return [d.dataArr[2], d.dataArr[3]];
    },
    // onHover: this._onHover.bind(this, mapStyle, 'ARCLayer', layerId, layerOption.name),
    getSourceColor: d => {
      if (colorType === 1) {
        let color = mapStyle.color.Ocolor;
        return rgbToColorArr(color);
      } else {
        let feild = mapStyle.color.feild;
        let val = d.properties[feild];
        if (sectionColor.type === 1) {
          if (this.x) {
            let color = this.x(val);
            return rgbToColorArr(color);
          }
          return [255, 140, 0, 255];
        } else if (sectionColor.type === 2) {
          let activeColor = null;
          for (let i in sectionNumber) {
            if (val < sectionNumber[i]) {
              activeColor = !sectionColorArr[i]?.toString()
                ? antitone
                  ? newColorArray[i]
                  : colorArray[i]
                : sectionColorArr[i];
              break;
            }
          }
          if (!activeColor) {
            activeColor = !sectionColorArr.slice(-1)?.toString()
              ? antitone
                ? newColorArray.slice(-1)
                : colorArray.slice(-1)
              : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
            activeColor = activeColor.toString();
          }
          return rgbToColorArr(activeColor);
        }
      }
    },
    getTargetColor: d => {
      if (colorType === 1) {
        let color = mapStyle.color.Dcolor;
        return rgbToColorArr(color);
      } else {
        let feild = mapStyle.color.feild;
        let val = d.properties[feild];
        if (sectionColor.type === 1) {
          if (this.x) {
            let color = this.x(val);
            return rgbToColorArr(color);
          }
          return [255, 140, 0, 255];
        } else if (sectionColor.type === 2) {
          let activeColor = null;
          for (let i in sectionNumber) {
            if (val < sectionNumber[i]) {
              activeColor = !sectionColorArr[i]?.toString()
                ? antitone
                  ? newColorArray[i]
                  : colorArray[i]
                : sectionColorArr[i];
              break;
            }
          }
          if (!activeColor) {
            activeColor = !sectionColorArr.slice(-1)?.toString()
              ? antitone
                ? newColorArray.slice(-1)
                : colorArray.slice(-1)
              : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
            activeColor = activeColor.toString();
          }
          return rgbToColorArr(activeColor);
        }
      }
    },
    getStrokeWidth: d => {
      if (radiusType === 1) {
        return mapStyle.line.radiusScale;
      } else if (radiusType === 2) {
        let feild = mapStyle.line.feild;
        let val = d.properties[feild];
        let radius = this.y(val) || 0.1;
        return parseFloat(radius);
      }
    },
    // visible:
    //     initialViewState?.zoom > zoom?.maxZoom || initialViewState?.zoom < zoom?.minZoom
    //         ? false
    //         : true,
    // 控制显隐
    visible: mapStyle.visible,
  };
  return layerConfig;
}
