//layerHover  layerClick
import { FlyToCamera } from './mapConst';

export function mapEvent(info, interactiveData, value, jumpState) {
  const { mapbox } = this.state;
  if (info?.object) {
    let content = info?.object?.properties;

    for (const variable in interactiveData) {
      if (interactiveData.hasOwnProperty(variable)) {
        if (
          info.layer?.props?.mapType === 'ScatterplotLayer' ||
          info.layer?.props?.mapType === 'TextLayer' ||
          info.layer?.props?.mapType === 'IconLayer' ||
          info.layer?.props?.mapType === 'ScenegraphLayer' ||
          info.layer?.props?.mapType === 'PolygonLayer'
        ) {
          if (Number(info.layer?.props?.dataid) === Number(interactiveData[variable]?.id)) {
            if (interactiveData[variable]?.defaultInteraction?.eventOption) {
              let allFeildetails = info?.object?.properties?.table_head;
              let allFeild = info?.object?.properties;
              let eventOption = JSON.parse(
                interactiveData[variable]?.defaultInteraction?.eventOption,
              );
              console.log(eventOption, 'eventOption');
              if (value === eventOption?.eventCondition) {
                // ( 如果不是弹框) {隐藏弹框}
                if (eventOption?.eventAction !== '1') {
                  this.clearCommon();
                }
                if (eventOption?.isShow) {
                  // coordinate 飞行
                  let activeStyle = eventOption?.activeStyle;
                  let flyTime = 0;
                  console.log('safmapTypeasfad', info.layer?.props?.mapType);
                  // 暂时去除面图层的点击飞行
                  if (
                    activeStyle?.flightCamera?.status &&
                    info.layer?.props?.mapType !== 'PolygonLayer'
                  ) {
                    let zoom = activeStyle?.flightCamera?.zoom;
                    flyTime = activeStyle?.flightCamera?.time;
                    this.setStateP({
                      iviewState: {
                        longitude: info?.object?.geometry?.coordinates[0],
                        latitude: info?.object?.geometry?.coordinates[1],
                        zoom: zoom,
                        ...FlyToCamera,
                        transitionDuration: flyTime * 1000,
                      },
                    });
                    this.map.flyTo({
                      center: info?.object?.geometry?.coordinates,
                      zoom: zoom,
                      speed: 0.5,
                      curve: 1,
                      essential: true,
                      easing(t) {
                        return t;
                      },
                    });
                  }
                  setTimeout(() => {
                    // ------ 固定位置 ------
                    if (
                      !eventOption?.interactionBoxPosition?.positionType ||
                      eventOption?.interactionBoxPosition?.positionType === 2
                    ) {
                      if (this.popup) {
                        this.popup.removeMapLayer();
                      }
                      if (!eventOption?.popType) {
                        //   弹框字段为空
                        if (eventOption.interactionDefault.selectField.length === 0) {
                          this.clearCommon();
                        } else {
                          let selectField = eventOption?.interactionDefault?.selectField;

                          let boxType = eventOption?.interactionDefault?.boxType;
                          let arrayFeild = [];
                          for (let i in selectField) {
                            let keyObj = allFeildetails.filter(e => e.key === selectField[i]);
                            arrayFeild.push({
                              key: keyObj[0].alias,
                              value: allFeild[selectField[i]],
                            });
                          }
                          this.setState({
                            popType: eventOption?.popType,
                            boxType: boxType,
                            popShow: true,
                            info: info,
                            tkContent: arrayFeild,
                            popContentStyle: eventOption,
                            eventInfo: info,
                            eventState: value,
                          });
                        }
                      } else if (eventOption?.popType === 1) {
                        this.setState({
                          popType: eventOption?.popType,
                          popShow: true,
                          info: info,
                          eventInfo: info,
                          popContentStyle: eventOption,
                          eventState: value,
                          allFeild,
                        });
                        //跟随
                        // this.popup.addMapLayer(mapbox, info);
                      } else {
                        this.setState({
                          popType: eventOption?.popType,
                          popShow: true,
                          info: info,
                          eventInfo: info,
                          popContentStyle: eventOption,
                          eventState: value,
                        });
                      }
                    } else {
                      let tempIsTrue = true;
                      // 默认类型
                      if (!eventOption?.popType) {
                        //   弹框字段为空
                        if (eventOption.interactionDefault.selectField.length === 0) {
                          this.clearCommon();
                          tempIsTrue = false;
                        }
                      }
                      if (tempIsTrue) {
                        // ------ 跟随对齐 ------
                        this.setState({
                          info: info,
                          eventInfo: info,
                          popContentStyle: eventOption,
                          eventState: value,
                          allFeild,
                        });
                        if (this.state.popShow) {
                          this.setState({
                            popShow: false,
                          });
                        }

                        let selectField = eventOption?.interactionDefault?.selectField;

                        let boxType = eventOption?.interactionDefault?.boxType;
                        let arrayFeild = [];
                        for (let i in selectField) {
                          let keyObj = allFeildetails.filter(e => e.key === selectField[i]);
                          arrayFeild.push({
                            key: keyObj[0].alias,
                            value: allFeild[selectField[i]],
                          });
                        }
                        let popType = eventOption?.popType;
                        let popShow = this.state.popShow;
                        this.popup.addMapLayer(mapbox, {
                          popType,
                          boxType,
                          show: popShow,
                          info,
                          content: arrayFeild,
                          contentStyle: eventOption,
                          allFeild,
                        });
                      }
                    }
                  }, flyTime * 1000);
                } else {
                  if (this.state.popShow) {
                    this.setState({
                      popShow: false,
                    });
                  }
                  if (this.popup) {
                    this.popup.removeMapLayer();
                  }
                }

                if (eventOption?.eventCondition === 'click' && eventOption?.eventAction === '4') {
                  // 跳转
                  if (jumpState === 1) {
                    window.open(eventOption.openNewPage.url);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (this.state.eventState === value) {
      this.setState({
        popShow: false,
      });
      if (this.popup) {
        this.popup.removeMapLayer();
      }
    }
  }
}
