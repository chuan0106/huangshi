// deck.gl
import ArcLayer from '@/afcomponents/AFMap/LayerProps/ArcLayer';
import LineLayer from '@/afcomponents/AFMap/LayerProps/LineLayer';
import IconLayer from '@/afcomponents/AFMap/LayerProps/IconLayer';
import HexagonLayer from '@/afcomponents/AFMap/LayerProps/HexagonLayer';
import CPUGridLayer from '@/afcomponents/AFMap/LayerProps/CPUGridLayer';
import PolygonLayer from '@/afcomponents/AFMap/LayerProps/PolygonLayer';
import PathLayer from '@/afcomponents/AFMap/LayerProps/PathLayer';
import ScatterplotLayer from '@/afcomponents/AFMap/LayerProps/ScatterplotLayer';
import TripsLayer from '@/afcomponents/AFMap/LayerProps/TripsLayer';
import ScenegraphLayer from '@/afcomponents/AFMap/LayerProps/ScenegraphLayer';
import TextLayer from '@/afcomponents/AFMap/LayerProps/TextLayer';
// mapbox图层
import HeatBeatLayer from '@/afcomponents/AFMap/LayerProps/HeartbeatLayer';
import HeatMapBoxLayer from '@/afcomponents/AFMap/LayerProps/HeatMapBoxLayer';
import SizeScatterLayer from '@/afcomponents/AFMap/LayerProps/SizeScatterLayer';
import TextLabelLayers from '@/afcomponents/AFMap/LayerProps/TextLabelLayer';
import FlyingLineLayer from '@/afcomponents/AFMap/LayerProps/FlyingLineLayer';
import WarnImageLayer from '@/afcomponents/AFMap/LayerProps/WarnImageLayer';

import { privateType } from '@/constants/projectConfig';

/**
 * 根据随机数获取颜色值
 * @param {数值} count
 */
function getColorByRandom(layerCon, isRandomColor, colorField) {
  if (!isRandomColor) return layerCon;

  const randomColor = () => {
    const count = Math.random() * 10;

    if (count < 2) {
      return [235, 50, 35];
    } else if (count < 4) {
      return [55, 125, 34];
    } else if (count < 6) {
      return [255, 253, 84];
    } else if (count < 8) {
      return [243, 168, 59];
    } else if (count < 10) {
      return [235, 50, 35];
    } else {
      return [117, 27, 124];
    }
  };

  layerCon.customProps = {
    ...layerCon.customProps,
    [colorField]: () => {
      return randomColor();
    },
  };

  return layerCon;
}

export default function loadLayerFunction(layerCon, isRandomColor) {
  switch (layerCon?.layerTypeStr) {
    case 'ARCLayer':
      return ArcLayer(layerCon);
    case 'IconLayer':
      return IconLayer(layerCon);
    case 'HexagonLayer':
      return HexagonLayer(layerCon);
    case 'CubeLayer':
      return CPUGridLayer(layerCon);
    case 'ScatterLayer':
      return ScatterplotLayer(getColorByRandom(layerCon, isRandomColor, 'getFillColor'));
    case 'ScenegraphLayer':
      return ScenegraphLayer(layerCon);
    case 'RegionLayer':
      return PolygonLayer(getColorByRandom(layerCon, isRandomColor, 'getFillColor'));
    case 'LineLayer':
      return PathLayer(getColorByRandom(layerCon, isRandomColor, 'getColor'));
    case 'ODLayer':
      return LineLayer(layerCon);
    case 'TripsLayer':
      return TripsLayer(layerCon);
    case 'HeartBeatLayer':
      return HeatBeatLayer(layerCon);
    case 'FlyingLineLayer':
      return FlyingLineLayer(layerCon);
    case 'WarnImageLayer':
      return WarnImageLayer(layerCon);
    case 'HeatMapLayer':
      return HeatMapBoxLayer(layerCon);
    case 'SizeScatterLayer':
      return SizeScatterLayer(layerCon);
    case 'LabelLayer':
      return TextLabelLayers(layerCon);
    case 'TextLayer':
      return TextLayer(layerCon);
    default:
      break;
  }
}
