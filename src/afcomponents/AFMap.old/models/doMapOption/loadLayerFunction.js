// deck.gl
import ArcLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/ArcLayer';
import LineLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/LineLayer';

import IconLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/IconLayer';
import HexagonLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/HexagonLayer';
import CPUGridLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/CPUGridLayer';
import PolygonLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/PolygonLayer';
import PathLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/PathLayer';
import ScatterplotLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/ScatterplotLayer';
import TripsLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/TripsLayer';
import ScenegraphLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/ScenegraphLayer';
import TextLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/TextLayer';
// import heatLayer from '../../components/Map/ReactMap/SpaceojoMap/LayerProps/HeatLayer';
// mapbox图层
import HeatBeatLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/HeartbeatLayer';
import HeatMapBoxLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/HeatMapBoxLayer';
import SizeScatterLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/SizeScatterLayer';
import TextLabelLayers from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/TextLabelLayer';
import FlyingLineLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/FlyingLineLayer';
import WarnImageLayer from '@/afcomponents/AFMap.old/SpaceojoMap/LayerProps/WarnImageLayer';
export default function loadLayerFunction(layerCon) {
  console.log('layerConlayerCon333', layerCon);
  // if (layerCon?.visibility === 1 || layerCon?.layerVisibility === 1) {
  //   return false;
  // }
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
      return ScatterplotLayer(layerCon);
    case 'ScenegraphLayer':
      return ScenegraphLayer(layerCon);
    case 'RegionLayer':
      return PolygonLayer(layerCon);
    case 'LineLayer':
      return PathLayer(layerCon);
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
    // case 'HeatMapLayer':
    //   return heatLayer(layerCon);
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
