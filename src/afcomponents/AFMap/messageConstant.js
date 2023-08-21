import { message } from 'antd';
export const layerMessage = {
  layerError: '图层格式错误',
  consoleWarning: [
    {
      type: 'ScatterplotLayer',
      id: 'x',
      layerProps: null,
      data: [{ coordinates: [116.4029280280498, 39.911997188418674], size: 500 }],
      color: [255, 255, 255],
      visible: true,
    },
  ],
};
export function layerError(layers) {
  message.destroy();
  message.error(layerMessage.layerError);
  console.warn(layerMessage.layerError, layers, '正确格式', layerMessage.consoleWarning);
}
export const meaasgeType = {
  /**
   * 正确格式
   * layers: [
   *  {
   *    type: 'ScatterplotLayer',
   *    id: 'x',
   *    layerProps: null,
   *    data: [{ coordinates: [116.4029280280498, 39.911997188418674], size: 500 }],
   *    color: [255, 255, 255],
   *    visible: true,
   *  }
   * ]
   *
   */
  layerError: '图层格式错误',
};
