import { Fragment } from 'react';
import styles from './styles.less';
import Iframe from 'react-iframe';
import IPConfig from '@/constants/IPConfig'
// import AFScreen from '../../../afcomponents/AFScreen/AFScreenCS.umd'; //打包后
const DIframe = ({
    type = 1,
    screenId = '14eaf6955fdf4dd080cdae9a0c888d56',
    width = '100%',
    height = '100%',
    params,
}) =>
{
    console.log(width, height, 'width, height', IPConfig, 'IPConfigIPConf11ig', params);

    const loadIFrameType = () =>
    {
        const urlType = (url) =>
        {
            return url + `/#/report?${screenId}&nd=${params?.year} &yd=${params?.month} &lb=${params?.type} `
            // 因甲方没有天的数据 则不需要传递月度
            // return url + `/#/report?${screenId}&nd=${params?.year} `

            // return params?.month === '' ? url + `/#/report?${screenId}&nd=${params?.year}  &lb=${params?.type} ` : url + `/#/report?${screenId}&nd=2022 &month=${params?.month} &lb=${params?.type} `
        }
        switch (type)
        {
            case 1:
                return (
                    <Iframe
                        // url={'https://www.dataojo.com/docloud' + `/#/report?39cb8bbd0e1948fd9bdaf4280eb5f8ab`}
                        // url={IPConfig?.REPORT_HOST + `/#/report?${screenId}&nd=${params?.year} &lb=${params?.type} `}
                        url={urlType(IPConfig?.REPORT_HOST, params)}
                        // url={true ? IPConfig?.REPORT_HOST + `/#/report?${screenId}&nd=${params?.year}  &lb=${params?.type} ` : IPConfig?.REPORT_HOST + `/#/report?${screenId}&nd=${params?.year} ${params?.month} &lb=${params?.type} `}
                        width={width}
                        height={height}
                        loading="加载中..."
                        id={screenId}
                        className={styles.myIframe}
                    />
                );
                break;
            case 2:
                // <Iframe
                //   url={`docloud2/index.html#/report?${screenId}`}
                //   width={width}
                //   height={height}
                //   loading="加载中..."
                //   id={screenId}
                // />;
                break;
            case 3:
            // return <AFScreen width={width} height={height} screenId={screenId}></AFScreen>;
            // break;
            default:
        }
    }
    return <Fragment>{loadIFrameType()}</Fragment>;
};
export default DIframe;
