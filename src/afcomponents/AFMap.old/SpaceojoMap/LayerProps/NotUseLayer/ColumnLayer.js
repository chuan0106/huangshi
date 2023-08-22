import {
  layerScaleOrdinal,
  layerScalePoint,
  layerScaleQuantile,
} from '@/utils/layerutils/layerScale';
import { fildToArray, rgbToColorArr } from '../../utils';
export default function ColumnLayer() {
  let mapStyle = mapStyleConfig;
  let colorArray = mapStyle.color.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  let antitone = mapStyle.color.antitone;
  if (mapStyle.color.type === 2) {
    newColorArray = newColorArray.reverse();
    this.colorWidth = fildToArray(dataSource, mapStyle.color.feild);
    if (isNaN(Number(this.colorWidth[0]))) {
      this.x = layerScaleOrdinal(this.colorWidth, antitone ? newColorArray : colorArray);
    } else {
      this.x = layerScaleQuantile(this.colorWidth, antitone ? newColorArray : colorArray);
    }
  }
  if (mapStyle.line.type === 2) {
    let radiusMinPixels = mapStyle.line.lineWidthMinPixels;
    let radiusMaxPixels = mapStyle.line.lineWidthMaxPixels;
    let radiusWidth = fildToArray(dataSource, mapStyle.line.feild);
    this.y = layerScalePoint(radiusWidth, [radiusMinPixels, radiusMaxPixels * 10]);
  }
  if (mapStyle.height.type === 2) {
    //根据高度字段的数据类型进行楼层高的计算
    let radiusMinPixels = mapStyle.height.heightMinPixels;
    let radiusMaxPixels = mapStyle.height.heightMaxPixels;
    let heightWidth = fildToArray(dataSource, mapStyle.height.feild);
    this.z = layerScalePoint(heightWidth, [radiusMinPixels, radiusMaxPixels * 10]);
  }
  let radiusType = mapStyle.line.type;
  let colorType = mapStyle.color.type;
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
  let layerConfig = {
    id: `column-layer${layerId}`,
    data: dataSource,
    opacity: mapStyle.color.opacity,
    pickable: true,
    // ...zoom,
    stroked: true,
    filled: true,
    extruded: mapStyle.height.extruded,
    wireframe: true,
    lineWidthScale: 10,
    lineWidthMinPixels: radiusType === 1 ? 0 : mapStyle.line.lineWidthMinPixels,
    lineWidthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.lineWidthMaxPixels * 10,
    getElevation: d => {
      let heightType = mapStyle.height.type;
      if (heightType === 1) {
        return mapStyle.height.heightScale * 5000;
      } else if (heightType === 2) {
        let feild = mapStyle.height.feild;
        let val = d.properties[feild];
        let radius = this.z(val);
        return radius * 17;
      }
    },
    getFillColor: d => {
      if (colorType === 1) {
        let color = mapStyle.color.color;
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
    getLineColor: [80, 80, 80],
    getLineWidth: d => {
      if (radiusType === 1) {
        return mapStyle.line.lineWidthScale;
      } else if (radiusType === 2) {
        let feild = mapStyle.line.feild;
        let val = d.properties[feild];
        let radius = this.y(val) || 0.1;
        return parseInt(radius);
      }
    },
    // visible:
    //     initialViewState?.zoom > zoom?.maxZoom || initialViewState?.zoom < zoom?.minZoom
    //         ? false
    //         : true,
    visible: mapStyle.visible,
  };
  return layerConfig;
}
