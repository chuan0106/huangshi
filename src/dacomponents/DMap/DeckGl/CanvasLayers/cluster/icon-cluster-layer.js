import { CompositeLayer } from '@deck.gl/core';
import { IconLayer, TextLayer } from '@deck.gl/layers';
import Supercluster from 'supercluster';
import { scaleThreshold } from 'd3-scale';

function getImg(size) {
  const canvas = document.createElement('canvas');
  const width = size;
  const height = size;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');

  context.beginPath();
  context.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
  context.closePath();
  context.fillStyle = 'green';
  context.fill();

  return canvas.toDataURL();
}

function getIconSize(size) {
  return Math.min(100, size) / 100 + 1;
}

function getBackgroundColor(backgroundColor, size) {
  let domain = [5, 10];
  let range = [
    [81, 187, 214],
    [241, 240, 117],
    [242, 140, 177],
  ];
  if (Array.isArray(backgroundColor)) {
    domain = backgroundColor.filter(item => !Array.isArray(item));
    range = backgroundColor.filter(item => Array.isArray(item));
  }
  let thresholdScale = scaleThreshold()
    .domain(domain)
    .range(range);

  return thresholdScale(size);
}

export default class IconClusterLayer extends CompositeLayer {
  shouldUpdateState({ changeFlags }) {
    return changeFlags.somethingChanged;
  }

  updateState({ props, oldProps, changeFlags }) {
    const rebuildIndex = changeFlags.dataChanged || props.sizeScale !== oldProps.sizeScale;

    if (rebuildIndex) {
      const index = new Supercluster({ maxZoom: 16, radius: props.sizeScale });
      index.load(
        props.data.map(d => ({
          geometry: { coordinates: props.getPosition(d) },
          properties: d,
        })),
      );
      this.setState({ index });
    }

    const z = Math.floor(this.context.viewport.zoom);
    if (rebuildIndex || z !== this.state.z) {
      this.setState({
        data: this.state.index.getClusters([-180, -85, 180, 85], z),
        z,
      });
    }
  }

  getPickingInfo({ info, mode }) {
    const pickedObject = info.object && info.object.properties;
    if (pickedObject) {
      if (pickedObject.cluster && mode !== 'hover') {
        info.objects = this.state.index
          .getLeaves(pickedObject.cluster_id, 25)
          .map(f => f.properties);
      }
      info.object = pickedObject;
    }
    return info;
  }

  renderLayers() {
    const size = 200;
    const { data } = this.state;
    const { sizeScale, backgroundColor, color, fontSize } = this.props;

    return [
      new IconLayer({
        iconAtlas: getImg(size),
        getIcon: d => 'marker',
        iconMapping: {
          marker: { x: 0, y: 0, width: size, height: size, anchorY: size / 2, mask: true },
        },
        id: '_canvas-img',
        data,
        sizeScale,
        getPosition: d => d.geometry.coordinates,
        getSize: d => getIconSize(d.properties.cluster ? d.properties.point_count : 1),
        getColor: d =>
          getBackgroundColor(backgroundColor, d.properties.cluster ? d.properties.point_count : 1),
        updateTriggers: {
          getColor: backgroundColor,
        },
      }),
      new TextLayer({
        id: '_cluster-text',
        data,
        getText: d => String(d.properties.cluster ? d.properties.point_count : 1),
        getPosition: d => d.geometry.coordinates,
        getSize: fontSize || 14,
        getColor: color || [0, 0, 0, 255],
      }),
    ];
  }
}
