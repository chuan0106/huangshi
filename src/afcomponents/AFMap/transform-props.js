import icon_1 from './img/icon-jg1.png';
import icon_2 from './img/icon-jg2.png';

/**
 * 把相数云图层属性转换成SDK接收的属性
 * @param {*} obj
 * @returns
 */
export const getMapboxLayerProps = obj => {
  let size, sizeScale, width, clusterRadius, minRadius, maxRadius, textSize, textVisible, textColor;
  let { mapStyle, option, ...other } = obj;
  let color = mapStyle.color;
  let radius = mapStyle.radius;
  let animation = mapStyle.animation;
  let feild = mapStyle.feild;
  let text = mapStyle.text;

  if (obj.mapType === 'HeatLayer') {
    color = {
      opacity: color.opacity,
      weightField: color.feild,
      colors: color.color,
      antitone: color.antitone,
    };
    radius = radius.radius;
  }

  if (obj.mapType === 'HeatMapLayer') {
    const colorProp = color.color;
    const colorArray = colorProp.map(item => item.match(/\d+/g).slice(0, 3));
    color = {
      opacity: color.opacity,
      weightField: color.feild,
      chromatography: colorArray,
    };
    radius = radius.radius;
  }

  if (obj.mapType === 'FlyingLineLayer') {
    const colorArray = mapStyle.customColor.color.match(/\d+/g).slice(0, 3);
    color = {
      color: [colorArray],
      opacity: mapStyle.opacity,
    };
    width = parseInt(mapStyle.radius);
    animation = {
      duration: 10000 / mapStyle.animateSpeed,
      animationType: mapStyle.styleType === 'toTop' ? 'lengthen' : 'shorten',
      dash: mapStyle.icon.imgSrc === '1' ? 0 : 2,
    };
    mapStyle = {
      ...mapStyle,
      height: parseInt(mapStyle.height * 2),
    };
  }

  if (obj.mapType === 'WarnImageLayer') {
    sizeScale = parseInt(mapStyle.size);
    animation = {
      duration: 10000 / mapStyle.animateSpeed,
      image: mapStyle.icon.imgSrc === '1' ? icon_1 : icon_2,
    };
    color = {
      opacity: mapStyle.opacity,
    };
  }

  if (obj.mapType === 'HeartBeatLayer') {
    size = radius.radius * 25;
    animation = {
      style: animation.scatterStyleType,
      duration: 10000 / animation.scatterSpeed,
      animationType: animation.scatterAimatedType,
    };
    const colorArray = color.color.match(/\d+/g).slice(0, 3);
    color = {
      opacity: color.opacity,
      forecolor: colorArray,
      bkColor: colorArray,
    };
  }

  if (obj.mapType === 'textLabelLayer') {
    sizeScale = mapStyle.size;
  }

  if (obj.mapType === 'SizeScatterLayer') {
    clusterRadius = radius.clusterRadius;
    minRadius = radius.radiusMinPixels;
    maxRadius = radius.radiusMaxPixels;
    textSize = text.fontSize;
    textVisible = text.show;
    textColor = text.color;
    color = {
      opacity: color.opacity,
      colors: color.antitone ? [...color.colorArray].reverse() : color.colorArray,
    };
  }

  if (feild) {
    feild = {
      fieldLabel: feild.name,
      fieldKey: feild.value,
    };
  }

  return {
    ...other,
    ...mapStyle,
    ...option,
    ...color,
    ...animation,
    ...feild,
    width,
    size,
    sizeScale,
    clusterRadius,
    radius,
    minRadius,
    maxRadius,
    textSize,
    textVisible,
    textColor,
    overlap: !mapStyle.autoAvoid,
    pitchAlignment: mapStyle.billboard ? 'viewport' : 'map',
    altitude: mapStyle.heightToGround,
    height: mapStyle.height,
  };
};
