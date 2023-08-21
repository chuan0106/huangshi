import {
  layerScaleOrdinal,
  layerScalePoint,
  layerScaleQuantile,
} from '@/utils/layerutils/layerScale';
import { configPath } from '../services/servicePath';
/**
 * @method rgbToColorArr
 * @params {color} 字符串
 * 将传入的"rgb(34,30,30)"转换 [34,30,30,255]格式
 */
export function rgbToColorArr(colors) {
  if (!colors) {
    return [255, 140, 0, 255];
  }
  let color = colors;
  if (color.indexOf('rgba') > -1) {
    color = color.replace('rgba', '');
    color = color.replace('(', '');
    color = color.replace(')', '');
    color = color.split(',');
    return [Number(color[0]), Number(color[1]), Number(color[2]), parseInt(255 * Number(color[3]))];
  } else {
    color = color.replace('rgb', '');
    color = color.replace('(', '');
    color = color.replace(')', '');
    color = color.split(',');
    return [Number(color[0]), Number(color[1]), Number(color[2]), 255];
  }
}
/**
 * @method sortAB
 * @params {array} 数组
 * 正序排序
 */
// function sortAB(array) {
//   return array.sort((a, b) => {
//     return Number(a) - Number(b);
//   });
// }
/**
 * @method unique
 * @params {arr} 数组
 * 去重
 */
// function unique(arr) {
//   //Set数据结构，它类似于数组，其成员的值都是唯一的
//   return Array.from(new Set(arr)); // 利用Array.from将Set结构转换成数组
// }

/**
 * @method getFeildArray
 * @params {geojson}
 * @params {feild}
 * @params {isToFixed}
 * 获取字段存入数组 这里有三种情况 数字  字符串数组 字符串
 */
export function getFeildArray(geojson, feild = '', isToFixed) {
  // let weightArr = [];
  // for (let i in geojson) {
  //   const properties = geojson[i].properties;
  //   let item = properties[feild];
  //   let numberItem = Number(item);
  //   //非数字判断
  //   if (isNaN(numberItem) || !isToFixed) {
  //     item = isNaN(numberItem) ? item : numberItem;
  //     weightArr.push(item);
  //   } else {
  //     weightArr.push(numberItem);
  //   }
  // }
  // weightArr = unique(weightArr);
  // weightArr = sortAB(weightArr);
  // return weightArr;
  // 旧方法
  let weightArr = [];
  for (let i in geojson) {
    let properties = geojson[i].properties;
    let keys = feild;
    let item = properties[keys];
    let numberitem = Number(item);
    if (isNaN(numberitem) || !isToFixed) {
      item = isNaN(numberitem) ? item : numberitem;
      if (weightArr.indexOf(item) < 0) {
        weightArr.push(item);
      }
    } else {
      if (weightArr.indexOf(numberitem.toFixed(3)) < 0) {
        weightArr.push(numberitem.toFixed(3));
      }
    }
  }
  for (let j = 0; j < weightArr.length - 1; j++) {
    for (let i = 0; i < weightArr.length - j; i++) {
      if (weightArr[i] > weightArr[i + 1]) {
        let num = weightArr[i];
        weightArr[i] = weightArr[i + 1];
        weightArr[i + 1] = num;
      }
    }
  }
  return weightArr;
}

/**
 * @method layerScaleOrdinal_x
 * @params {color}  颜色属性
 * @params {geojson}  geosin格式数据
 * 用指定的域和范围构造一个新的有序标度。
 */
export function colorLayerScaleOrdinal_Quantile(color, geojson) {
  let layerScaleOrdinal_Quantile = null;
  let colorArray = color?.colorArray;
  let antitone = color?.antitone;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  let feildArray = getFeildArray(geojson, color?.feild, true);
  newColorArray = newColorArray.reverse();
  let useColorArray = antitone ? newColorArray : colorArray;
  //非数组
  if (isNaN(Number(feildArray[feildArray.length - 1]))) {
    layerScaleOrdinal_Quantile = layerScaleOrdinal(feildArray, useColorArray);
  } else {
    layerScaleOrdinal_Quantile = layerScaleQuantile(feildArray, useColorArray);
  }
  return layerScaleOrdinal_Quantile;
}
/**
 * @method sizeLayerScalePoint
 * @params {size}  大小属性
 * @params {geojson}  geosin格式数据
 * 构造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。
 */
export function sizeLayerScalePoint(size, geojson) {
  let sizeMinPixels = size.sizeMinPixels || 0;
  let sizeMaxPixels = size.sizeMaxPixels || 100;
  let feildArray = getFeildArray(geojson, size?.feild);
  return layerScalePoint(feildArray, [sizeMinPixels, sizeMaxPixels]);
}
/**
 * @method anchorHeightLayerScalePoint
 * @params {anchorHeight}  高度属性
 * @params {geojson}  geosin格式数据
 * 构造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。
 */
export function anchorHeightLayerScalePoint(anchorHeight, geojson) {
  let heightMinPixels = anchorHeight.heightMinPixels || 1;
  let heightMaxPixels = anchorHeight.heightMaxPixels || 100;
  let feildArray = getFeildArray(geojson, anchorHeight.feild);
  return layerScalePoint(feildArray, [heightMinPixels, heightMaxPixels]);
}
/**
 * @method getSourceColor
 * @params {d}  每一条数据 object
 * @params {layerTypeStr}  图层类型 string
 * @params {mapStyle}  图层属性字段 object
 * @params {geojson}  geosin格式数据
 * @params {sectionColor}  颜色自定义分段
 * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。（起点处颜色）
 */
export function getSourceColor(d, layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal) {
  let commonSection = commonSectionColor(sectionColor);
  let sectionNumber = commonSection?.SectionNumber;
  let sectionColorArr = commonSection?.sectionColorArr;
  let colorArray = mapStyle.color.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  newColorArray = newColorArray.reverse();
  let antitone = mapStyle.color.antitone;
  let colorType = mapStyle.color.type;
  // console.log('askgfjasdhgfa', layerTypeStr, colorType, sectionColor);
  if (colorType === 1) {
    let color;
    if (layerTypeStr === 'ARCLayer' || layerTypeStr === 'ODLayer') {
      color = mapStyle.color.Ocolor;
    } else {
      color = mapStyle.color.color;
    }
    return rgbToColorArr(color);
  } else {
    let feild = mapStyle.color.feild;
    let val = d.properties[feild];
    if (sectionColor.type === 1) {
      // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
      if (mapStyle?.color?.type === 2) {
        if (scaleOrdinal) {
          let color = scaleOrdinal(val);
          return rgbToColorArr(color);
        }
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
}
/**
 * @method getTargetColor
 * @params {d}  每一条数据 object
 * @params {layerTypeStr}  图层类型 string
 * @params {mapStyle}  图层属性字段 object
 * @params {geojson}  geosin格式数据
 * @params {sectionColor}  颜色自定义分段
 * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。（终点颜色）
 */
export function getTargetColor(d, layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal) {
  let commonSection = commonSectionColor(sectionColor);
  let sectionNumber = commonSection?.SectionNumber;
  let sectionColorArr = commonSection?.sectionColorArr;
  let colorArray = mapStyle.color.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  newColorArray = newColorArray.reverse();
  let antitone = mapStyle.color.antitone;
  let colorType = mapStyle.color.type;
  if (colorType === 1) {
    let color;
    if (layerTypeStr === 'ARCLayer' || layerTypeStr === 'ODLayer') {
      color = mapStyle.color.Dcolor;
    } else {
      color = mapStyle.color.color;
    }
    return rgbToColorArr(color);
  } else {
    let feild = mapStyle.color.feild;
    let val = d.properties[feild];
    if (sectionColor.type === 1) {
      // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
      if (mapStyle?.color?.type === 2) {
        if (scaleOrdinal) {
          let color = scaleOrdinal(val);
          return rgbToColorArr(color);
        }
        // scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
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
}
/**
 * @method getColor
 * @params {d}  每一条数据 object
 * @params {geojson}  图层数据 array
 * @params {mapStyle}  图层属性字段 object
 * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。
 */
export function getColor(d, mapStyle, geojson, scaleOrdinal) {
  let colorType = mapStyle.color.type;
  // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
  if (colorType === 1) {
    let color = mapStyle.color.Ocolor;
    return rgbToColorArr(color);
  } else {
    let feild = mapStyle.color.feild;
    let val = d.properties[feild];
    if (scaleOrdinal) {
      let color = scaleOrdinal(val);
      return rgbToColorArr(color);
    }
    return [255, 140, 0, 255];
  }
}
/**
 * @method getHeatColor
 * @params {color}  颜色数组
 * 将"rgba(11,12,134)转换为[234,123,145,255]。
 */
export function getHeatColor(color) {
  let colorRange = [];
  for (const key in color) {
    if (color.hasOwnProperty(key)) {
      colorRange.push(rgbToColorArr(color[key]));
    }
  }
  return colorRange;
}
/**
 * @method getHeatColor
 * @params {color}  颜色数组
 * 将"rgba(11,12,134)转换为[234,123,145,255]。
 */
export function heatLayerData(geoJsondata, mapStyle) {
  let weightColors = null;
  let colorWidth = getFeildArray(geoJsondata, mapStyle?.color?.feild, true);
  weightColors = layerScalePoint(colorWidth, [1, 10000]);
  for (let i in geoJsondata) {
    geoJsondata[i].properties.weight = weightColors
      ? weightColors(geoJsondata[i].properties[(mapStyle?.color?.feild)])
      : 0.5;
  }
  return geoJsondata;
}
/**
 * @method getWidth
 * @params {mapStyleType}  图层类型 string
 * @params {radiusType}  半径类型 number
 * @params {mapStyle}  图层属性字段 object
 * @params {d}  每一条数据 object
 * @params {geojson}  图层数据 array
 * 用于设置宽度（线宽、边宽之类）
 */
export function getWidth(mapStyleType, radiusType, mapStyle, d, geojson, scalePoint) {
  let feild = null;
  if (radiusType === 1) {
    if (mapStyleType === 'LineLayer') {
      return mapStyle.radius.radiusScale;
    } else if (mapStyleType === 'ARCLayer') {
      return mapStyle.line.radiusScale;
    } else if (mapStyleType === 'RegionLayer') {
      return mapStyle.line.lineWidthScale;
    } else {
      return mapStyle.line.radiusScale;
    }
  } else if (radiusType === 2) {
    // let scalePoint = layerScaleOrdinal_y(mapStyle, mapStyleType, geojson);
    if (
      mapStyleType === 'RegionLayer' ||
      mapStyleType === 'ARCLayer' ||
      mapStyleType === 'ODLayer'
    ) {
      feild = mapStyle.line.feild;
    } else if (mapStyleType === 'LineLayer') {
      feild = mapStyle.radius.feild;
    }
    let val = d.properties[feild];
    let radius = scalePoint(val) || 0.1;
    return Number(radius);
  }
}
/**
 * @method visible
 * @params {layerCon} object
 * 设置图层显隐
 */
export function visible(layerCon) {
  console.log('asdfasdf234asdfasd', layerCon);
  if (layerCon?.dataVisiably === 2) {
    if (layerCon?.level === 2) {
      if (layerCon?.visibility === 2) {
        return true;
      } else {
        return false;
      }
    } else {
      if (layerCon?.layerVisibility === 2) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  // if (layerCon?.level === 2) {
  //   if (layerCon?.visibility === 2) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   if (!layerCon?.level) {
  //     if (layerCon?.visibility === 2) {
  //       if (layerCon?.layerVisibility === 2) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return false;
  //     }
  //   }
  // }
}
/**
 * @method arrayData
 * @params {geojson} 图层数据 array
 * @params {mapStyleType} 图层类型 string
 * 用于处理线（pathLayer）和面图层数据格式
 */
export function arrayData(geojson, mapStyleType) {
  let arrayData = [];
  for (let i = 0; i < geojson?.length; i++) {
    let geoData = geojson[i].geometry;
    if (geoData.type === 'MultiPolygon') {
      if (mapStyleType === 'LineLayer') {
        for (let j in geoData.coordinates) {
          arrayData.push({
            ...geojson[i],
            lonlat: geoData.coordinates[j][0],
          });
        }
      } else if (mapStyleType === 'RegionLayer') {
        for (let j in geoData.coordinates) {
          arrayData.push({
            ...geojson[i],
            lonlat: geoData.coordinates[j],
          });
        }
      }
    } else {
      arrayData.push({
        ...geojson[i],
        lonlat: geoData.coordinates[0],
      });
    }
  }
  return arrayData;
}
/**
 * @method colorRange
 * @params {mapStyle} 图层属性 object
 * 用于处理颜色数组格式与颜色反序
 */
export function colorRange(mapStyle) {
  let colors = mapStyle?.color?.color;
  let newColors = [];
  if (!colors) {
    return;
  }
  let antitone = mapStyle.color.antitone;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    newColors.push(rgbToColorArr(color));
  }
  let newColorArray = JSON.parse(JSON.stringify(newColors));
  newColorArray = newColorArray.reverse();
  if (antitone) {
    return newColorArray;
  } else {
    return newColors;
  }
}
/**
 * @method getElevation
 * @params {mapStyle} 图层属性 object
 * @params {layerTypeStr} 图层类型 string
 * @params {d} 每一条数据 object
 * @params {geojson} 图层数据 array
 * 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。
 */
export function getElevation(mapStyle, layerTypeStr, d, geojson, scalePoint_z) {
  let heightType = mapStyle.height.type;
  // let scalePoint_z = null;
  if (heightType === 1) {
    return mapStyle.height.heightScale * 5000;
  } else if (heightType === 2) {
    // scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr);
    let feild = mapStyle.height.feild;
    let val = d.properties[feild];
    let radius = scalePoint_z(val);
    return radius * 17;
  }
}
/**
 * @method commonSectionColor
 * @params {Section} 自定义分段属性 object
 * 用于处理图层自定义分段函数
 */
export function commonSectionColor(Section) {
  let sectionColor = Section;
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
  return { SectionNumber: sectionNumber, sectionColorArr: sectionColorArr };
}
/**
 * @method getFillColor
 * @params {d} 每一条数据 object
 * @params {Section} 自定义分段属性 object
 * @params {color} 颜色对象属性 object
 * @params {geojson} 数据 array
 * 多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
 */
export function getFillColor(d, Section, color, geojson, scaleOrdinal) {
  //颜色类型
  let colorType = color?.type;
  // 自定义分组颜色
  let sectionColor = Section?.color;
  // 是否反序
  let antitone = color?.antitone;
  let colorArray = color?.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  newColorArray = newColorArray.reverse();
  let commonSection = commonSectionColor(sectionColor);
  // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(color, geojson);
  let sectionNumber = commonSection?.SectionNumber;
  let sectionColorArr = commonSection?.sectionColorArr;
  if (colorType === 1) {
    let colorNew = color?.color;
    return rgbToColorArr(colorNew);
  } else {
    let feild = color?.feild;
    let val = d.properties[feild];
    if (sectionColor.type === 1) {
      if (scaleOrdinal) {
        let colorNew = scaleOrdinal(val);
        return rgbToColorArr(colorNew);
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
    } else if (sectionColor.type === 3) {
      let colorNew = color?.color;
      return rgbToColorArr(colorNew);
    }
  }
}
/**
 * @method layerScaleOrdinal_x
 * @params {mapStyle}  图层属性
 * @params {dataSource}  geosin格式数据
 * 用指定的域和范围构造一个新的有序标度。
 */
export function layerScaleOrdinal_x(mapStyle, dataSource) {
  let scaleOrdinal = null;
  let colorWidth = null;
  let colorArray = mapStyle?.color?.colorArray;
  let newColorArray = JSON.parse(JSON.stringify(colorArray));
  let antitone = mapStyle?.color?.antitone;
  if (mapStyle?.color?.type === 2) {
    newColorArray = newColorArray.reverse();
    colorWidth = getFeildArray(dataSource, mapStyle?.color?.feild, true);
    if (isNaN(Number(colorWidth[0]))) {
      scaleOrdinal = layerScaleOrdinal(colorWidth, antitone ? newColorArray : colorArray);
    } else {
      scaleOrdinal = layerScaleQuantile(colorWidth, antitone ? newColorArray : colorArray);
    }
  }
  return scaleOrdinal;
}
/**
 * @method layerScaleOrdinal_y
 * @params {mapStyle}  图层属性
 * @params {layerTypeStr}  图层类型
 * @params {dataSource}  geosin格式数据
 * 造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。
 */
export function layerScaleOrdinal_y(mapStyle, layerTypeStr, dataSource) {
  let scalePoint = null;
  if (
    (mapStyle?.line?.type === 2 && layerTypeStr === 'ARCLayer') ||
    (mapStyle?.line?.type === 2 && layerTypeStr === 'ODLayer')
  ) {
    let radiusMinPixels = mapStyle.line.radiusMinPixels;
    let radiusMaxPixels = mapStyle.line.radiusMaxPixels;
    let radiusWidth = getFeildArray(dataSource, mapStyle.line.feild);
    scalePoint = layerScalePoint(radiusWidth, [radiusMinPixels, radiusMaxPixels]);
  }
  if (
    (mapStyle?.radius?.type === 2 && layerTypeStr === 'ScatterLayer') ||
    (mapStyle?.radius?.type === 2 && layerTypeStr === 'LineLayer')
  ) {
    // 最小半径（以像素为单位）。
    let radiusMinPixels = mapStyle?.radius?.radiusMinPixels;
    // 最大半径（以像素为单位）。
    let radiusMaxPixels = mapStyle?.radius?.radiusMaxPixels;
    // 半径宽度
    let radiusWidth = getFeildArray(dataSource, mapStyle.radius.feild);
    let arr = [radiusMinPixels, radiusMaxPixels * 6];
    scalePoint = layerScalePoint(radiusWidth, arr);
  }
  if (mapStyle?.line?.type === 2 && layerTypeStr === 'RegionLayer') {
    let radiusMinPixels = mapStyle.line.lineWidthMinPixels;
    let radiusMaxPixels = mapStyle.line.lineWidthMaxPixels;
    let radiusWidth = getFeildArray(dataSource, mapStyle.line.feild);
    scalePoint = layerScalePoint(radiusWidth, [radiusMinPixels, radiusMaxPixels * 10]);
  }
  return scalePoint;
}
/**
 * @method layerScaleOrdinal_z
 * @params {mapStyle}  图层属性
 * @params {layerTypeStr}  图层类型
 * @params {geojson}  geosin格式数据
 * 造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。（高度）
 */
export function layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr) {
  let scalePoint_z;
  if (layerTypeStr === 'RegionLayer') {
    if (mapStyle.height.type === 2) {
      //根据高度字段的数据类型进行楼层高的计算
      let radiusMinPixels = mapStyle.height.heightMinPixels;
      let radiusMaxPixels = mapStyle.height.heightMaxPixels;
      let heightWidth = getFeildArray(geojson, mapStyle.height.feild);
      scalePoint_z = layerScalePoint(heightWidth, [radiusMinPixels, radiusMaxPixels * 10]);
    }
  } else if (layerTypeStr === 'IconLayer') {
    if (mapStyle.size.type === 3) {
      let heightMinPixels = mapStyle.anchorHeight.heightMinPixels;
      let heightMaxPixels = mapStyle.anchorHeight.heightMaxPixels;
      let anchorHeight = getFeildArray(geojson, mapStyle.anchorHeight.feild);
      let arr = [heightMinPixels, heightMaxPixels];
      scalePoint_z = layerScalePoint(anchorHeight, arr);
    }
  }
  return scalePoint_z;
}
/**
 * @method dataCollation_trips
 * @params {trips} 属性对象 object
 * @params {dataSource} 数据 array
 * 处理传入的数据(tripsLayer)
 */
export function dataCollation_trips(dataSource, trips) {
  let data = dataSource;
  let arr = [];
  let idArr = [];
  let timeArr = [];
  // for (let i in data) {
  //   let indexLength = idArr.indexOf(data[i].properties[trips.feild]);
  //   let time = new Date(data[i].properties['field_dtg']).getTime() / 1000;
  //   time = isNaN(time) ? 0 : time;
  //   if (indexLength > -1) {
  //     if (arr[indexLength].path[arr[indexLength].path.length - 1][1] !== time) {
  //       arr[indexLength].path.push([data[i].geometry.coordinates, time]);
  //     }
  //   } else {
  //     let obj = {
  //       id: data[i].properties[trips.feild],
  //       path: [[data[i].geometry.coordinates, time]],
  //       properties: data[i].properties,
  //     };
  //     arr.push(obj);
  //     idArr.push(data[i].properties[trips.feild]);
  //   }
  //   if (timeArr.indexOf(time) < 0) {
  //     timeArr.push(time);
  //   }
  // }
  for (const i of data) {
    let indexLength = idArr.indexOf(i.properties[trips.feild]);
    let time = new Date(i.properties['field_dtg']).getTime() / 1000;
    time = isNaN(time) ? 0 : time;
    if (indexLength > -1) {
      if (arr[indexLength].path[arr[indexLength].path.length - 1][1] !== time) {
        arr[indexLength].path.push([i.geometry.coordinates, time]);
      }
    } else {
      let obj = {
        id: i.properties[trips.feild],
        path: [[i.geometry.coordinates, time]],
        properties: i.properties,
      };
      arr.push(obj);
      idArr.push(i.properties[trips.feild]);
    }
    if (timeArr.indexOf(time) < 0) {
      timeArr.push(time);
    }
  }

  return { data: arr, timeArr: timeArr };
}
/**
 * @method getRadius
 * @params {d}  每一条数据 object
 * @params {radius} 半径属性对象 object
 * @params {geojson} 数据 array
 * 设置点的半径和多点特征，以米为单位。
 */
export function getRadius(d, radius, geojson, scalePoint) {
  // 半径类型
  let radiusType = radius.type;
  // 半径字段
  let radiusfeild = radius.feild;
  // let scalePoint = sacatterLayerScalePoint(radius, geojson);
  if (radiusType === 1) {
    return radius.radiusScale * 10;
  } else if (radiusType === 2) {
    let val = d.properties[radiusfeild];
    let radius = scalePoint(val) || 0.1;
    return parseInt(radius);
  }
}
/**
 * @method sacatterLayerScalePoint
 * @params {radius} 半径属性对象 object
 * @params {geojson} 数据 array
 * 构造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。（散点）
 */
export function sacatterLayerScalePoint(radius, geojson) {
  let radiusMinPixels = radius.radiusMinPixels || 0;
  let radiusMaxPixels = radius.radiusMaxPixels || 100;
  let feildArray = getFeildArray(geojson, radius?.feild);
  return layerScalePoint(feildArray, [radiusMinPixels, radiusMaxPixels * 6]);
}
/**
 * @method getSize
 * @params {size} 大小属性对象 object
 * @params {d}  每一条数据 object
 * @params {geojson} 数据 array
 * 设置大小 （散点半径等）
 */
export function getSize(size, geojson, d, getSizeLayerScalePoint) {
  let sizeType = size?.type;
  let sizefeild = size?.feild;
  // let getSizeLayerScalePoint = sizeLayerScalePoint(size, geojson);
  if (sizeType === 1) {
    return size.size;
  } else if (sizeType === 2) {
    let val = d.properties[sizefeild];
    let size = getSizeLayerScalePoint(val) || 0.1;
    return parseInt(size);
  }
}
/**
 * @method getAngle
 * @params {d} 每一条数据 object
 * @params {angle} 角度属性 object
 * @params {geojson} 数据 array
 * 设置旋转角度
 */
export function getAngle(d, angle, geojson, ScalePoint) {
  let angleNum = angle?.angle;
  let angleType = angle?.type;
  let angleFeild = angle?.feild;
  // let angleMinPixels = angle.angleMinPixels;
  // let angleMaxPixels = angle.angleMaxPixels;
  // let feildArray = getFeildArray(geojson, angleFeild, true);
  // let arr = [angleMinPixels, angleMaxPixels];
  // let k = layerScalePoint(feildArray, arr);
  if (angleType === 1) {
    return angleNum;
  } else if (angleType === 2) {
    let val = d.properties[angleFeild];
    let angle = ScalePoint(val) || 0.1;
    return parseInt(angle);
  }
}
/**
 * @method data_Source
 * @params {mapStyle} 图层属性 object
 * @params {dataSource} 数据 array
 * 数据处理（针对于，OD,TRIPS）
 */
export function data_Source(mapStyle, dataSource) {
  let data = [];
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
      //   data[i].dataArr = obj;
      data.push({
        ...dataSource[i],
        dataArr: obj,
      });
    }
  } else {
    data = [];
  }
  return data;
}
/**
 * @method data_Source_Reverse
 * @params {mapStyle} 图层属性 object
 * @params {dataSource} 数据 array
 * 对数据源数据正序排序、正序排序+反序
 */
export function data_Source_Reverse(mapStyle, dataSource) {
  let data = dataSource;
  if (mapStyle?.line?.dataReverse) {
    let doState = true;
    for (let elem of data) {
      if (!isNaN(Number(elem.properties[[mapStyle?.line?.feild]])) && doState) {
        data = data.sort((a, b) => {
          return a.properties[(mapStyle?.line?.feild)] - b.properties[(mapStyle?.line?.feild)];
        });
        data = data.reverse();
        doState = false;
      }
    }
  } else {
    let doState = true;
    for (let elem of data) {
      if (!isNaN(Number(elem.properties[[mapStyle?.line?.feild]])) && doState) {
        data = data.sort((a, b) => {
          return a.properties[(mapStyle?.line?.feild)] - b.properties[(mapStyle?.line?.feild)];
        });
        doState = false;
      }
    }
  }
  return data;
}
/**
 * @method getIcon
 * @params {d} 每一条数据 object
 * @params {anchorHeight} 锚点高度 object
 * @params {iconUrl} 图片地址 string
 * @params {state} 状态 string
 * @params {geojson} 数据 array
 * @params {mapStyle} 图层属性 object
 * @params {layerTypeStr} 图层类型 string
 * 用于处理图标地址、大小、位置、模式
 */
export function getIcon(
  d,
  anchorHeight,
  iconUrl,
  state,
  mapStyle,
  geojson,
  layerTypeStr,
  scalePoint_z,
  timestamp,
) {
  let anchorHeightFeild = anchorHeight.feild;
  let anchorHeightHeight = anchorHeight.height;
  let anchorHeightType = anchorHeight.type;
  let anchorY = anchorHeightHeight;
  // let scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr);
  if (anchorHeightType === 1) {
    anchorY = anchorHeightHeight;
  } else if (anchorHeightType === 3) {
    let val = d.properties[anchorHeightFeild];
    let size = scalePoint_z(val) || 0.1;
    anchorY = parseInt(size);
  }

  return {
    id: timestamp,
    url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
    width: 512,
    height: 512,
    anchorY: anchorY * 10,
    x: 0,
    y: 0,
    mask: state,
  };
}
/**
 * @method getAggregation
 * @params {mapStyle} 图层属性 object
 * @params {points} 每一条数据的经纬度 array
 * 计算四边形和六边形网格聚合值(1:计数、2：求和、3：平均)
 */
export function getAggregation(mapStyle, points) {
  let aggregation = mapStyle.aggregation;

  if (!aggregation || aggregation?.type === 1 || !aggregation?.feild || !aggregation?.type) {
    return points.length;
  }
  let feildDataArr = [];
  let resultData = 1;
  delete points.x;
  delete points.y;
  for (let i in points) {
    let item = points[i].properties[aggregation.feild];
    if (isNaN(Number(item))) {
      feildDataArr.push(item);
    } else {
      feildDataArr.push(Number(item));
    }
  }
  if (aggregation.type === 2) {
    if (isNaN(Number(feildDataArr[0]))) {
      resultData = feildDataArr.length;
    } else {
      resultData = eval(feildDataArr.join('+'));
    }
  }
  if (aggregation.type === 3) {
    if (isNaN(Number(feildDataArr[0]))) {
      resultData = feildDataArr.length;
    } else {
      resultData = eval(feildDataArr.join('+')) / feildDataArr.length;
    }
  }
  resultData = Number(resultData.toFixed(4));
  return resultData;
}
// export function iconData(geojson, iconStyles) {
//   let data = [];
//   for (const key of geojson) {
//     data.push({
//       type: key?.type,
//       geometry: key?.geometry,
//       properties: {
//         ...key?.properties,
//         url: `${configPath.getImgByIdPath}imageid=${iconStyles.url}`
//       }
//     })
//   }
//   return data;
// }
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * 合并对象(用于处理图层属性)
 * @method {looseEqual}
 * @param {object}  对象1
 * @param {object}  对象2
 */
export function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every(function(e, i) {
            return looseEqual(e, b[i]);
          })
        );
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return (
          keysA.length === keysB.length &&
          keysA.every(function(key) {
            return looseEqual(a[key], b[key]);
          })
        );
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

/**
 * @method getText
 * @params {text} 文本
 *
 */
export function getText(text, fontStyle, angle) {
  if (text === undefined) {
    return (
      '                                             ' +
      '         ' +
      '                                             '
    );
  }
  if (fontStyle?.redirect === 1) {
    if (angle?.textAnchor === 'middle') {
      return (
        '                                             ' +
        text +
        '                                             '
      );
    } else if (angle?.textAnchor === 'start') {
      return text + '                                             ';
    } else {
      return '                                             ' + text;
    }
  } else {
    let oldText = null;
    let newText = '';
    oldText = typeof text === 'string' ? text : text.toString();
    oldText = oldText.split('');
    for (const key in oldText) {
      newText += oldText[key] + '\n';
    }
    if (angle?.textAnchor === 'middle') {
      return (
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' +
        newText +
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
      );
    } else if (angle?.textAnchor === 'start') {
      return newText + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    } else {
      return '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + newText;
    }
  }
}

/**
 * @method getCharacterSet
 * @params {text} 文本
 * 字符集
 */
export function getCharacterSet(geojsonData, key) {
  let characterSet = ['/n', '&nbsp;'];
  if (geojsonData?.length > 0) {
    for (let k in geojsonData) {
      let newfeatures = geojsonData[k]?.properties[key];
      for (let i in newfeatures) {
        let keyName = newfeatures[i];
        for (let j = 0; j <= keyName?.length; j++) {
          if (characterSet.indexOf(keyName[j]) < 0) {
            if (keyName[j]) {
              characterSet.push(keyName[j]);
            }
          }
        }
      }
    }
  }
  //   console.log('characterSet', characterSet);
  return characterSet;
}
