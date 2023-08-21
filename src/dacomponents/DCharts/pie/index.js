// 待完善wwq

/**
 *插件
 */
import { connect } from 'dva';

/**
 * UI组件
 */
import * as echarts from 'echarts';

/**
 * 本地资源
 */
import { demoData, tempData } from './demoData';

class Pie {
  constructor() {}

  getChartFun = () => {
    let inData = [{ value: null, name: '富裕指数(内环)' }],
      outData = [{ value: null, name: '出行方式(外环)' }];
    if (demoData) {
      demoData.dataP.forEach(item => {
        inData.push({ value: item.rate, name: item.richnessindex });
      });
      demoData.dataS.forEach(item => {
        outData.push({ value: item.rate, name: item.cxfs });
      });
    }

    const legendP = () => {
      let tempArr = [];
      demoData.dataP.forEach(item => {
        tempArr.push(item.richnessindex);
      });
      return tempArr;
    };

    const legendS = () => {
      let tempArr = [];
      demoData.dataS.forEach(item => {
        tempArr.push(item.cxfs);
      });
      return tempArr;
    };
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: [
        {
          orient: 'vertical',
          x: '54.5%',
          y: '0%',
          itemWidth: 0, // 图形宽度。
          itemHeight: 0, // 图形高度。
          data: ['富裕指数(内环)'],
          formatter: thisName => {
            return ['{c|' + thisName + '}'].join('');
          },
          textStyle: {
            fontSize: 14,
            width: 170,
            rich: {
              c: {
                align: 'left',
                color: '#ffffff',
              },
            },
          },
        },
        {
          orient: 'vertical',
          x: '56%',
          y: '12%',
          itemWidth: 8, // 图形宽度。
          itemHeight: 8, // 图形高度。
          data: legendP(),
          formatter: thisName => {
            let allCountTemp = 0,
              thisCount,
              arr;
            inData.forEach(item => {
              allCountTemp = allCountTemp + item.value;
              if (thisName === item.name) {
                thisCount = item.value;
              }
            });
            arr = [
              '{a|' + thisName + '}',
              '{b|' + ((thisCount / allCountTemp) * 100).toFixed(2) + '  %}',
            ];
            return arr.join('');
          },
          textStyle: {
            fontSize: 16,
            width: 170,
            rich: {
              a: {
                align: 'left',
                color: '#ffffff',
                padding: [0, 0, 0, 13],
              },
              b: {
                align: 'right',
                color: '#ffffff',
              },
            },
          },
        },
        {
          orient: 'vertical',
          x: '54.5%',
          y: '48%',
          itemWidth: 0, // 图形宽度。
          itemHeight: 0, // 图形高度。
          data: ['出行方式(外环)'],
          formatter: thisName => {
            return ['{c|' + thisName + '}'].join('');
          },
          textStyle: {
            fontSize: 14,
            width: 170,
            rich: {
              c: {
                align: 'left',
                color: '#ffffff',
              },
            },
          },
        },
        {
          orient: 'vertical',
          x: '56%',
          y: '60%',
          itemWidth: 8, // 图形宽度。
          itemHeight: 8, // 图形高度。
          data: legendS(),
          formatter: thisName => {
            let allCountTemp = 0,
              thisCount,
              arr;
            outData.forEach(item => {
              allCountTemp = allCountTemp + item.value;
              if (thisName === item.name) {
                thisCount = item.value;
              }
            });
            arr = [
              '{a|' + thisName + '}',
              '{b|' + ((thisCount / allCountTemp) * 100).toFixed(2) + '  %}',
            ];
            return arr.join('');
          },
          textStyle: {
            fontSize: 16,
            width: 170,
            rich: {
              a: {
                align: 'left',
                color: '#ffffff',
                padding: [0, 0, 0, 13],
              },
              b: {
                align: 'right',
                color: '#ffffff',
              },
            },
          },
        },
      ],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '50%'],
          center: [130, '50%'],
          // startAngle:270, //起始角度
          label: {
            show: false,
            position: 'inner',
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: inData,
          color: ['#00A0E9', '#7ECEF4', '#1B53F5'],
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['70%', '85%'],
          center: [130, '50%'],
          labelLine: {
            show: false,
            length: 30,
          },
          label: {
            show: false,
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,

            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center',
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33,
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: outData,
          color: ['#5871C0', '#9EC87E', '#F3C96B', '#84BFDB'],
        },
      ],
    });
  };
}
export default Pie;
