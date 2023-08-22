/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-05-25 16:26:04
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-26 14:22:02
 * @Description: 
 */
import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


// ChartsBox.defaultProps = {
//     width: '100%',
//     height: '100%',
//     option: {},
// };

function ChartsBox ({ option }) {
    const el = useRef(null);
    let myChart = null;
    // const [option, setOptions] = useState(props.option);
    useEffect(() => {
        myChart = echarts.init(el.current);
    }, [])
    useEffect(() => {
        console.log(option, 'option');
        if (myChart) {
            myChart.setOption(option, true);
        }

    }, [option]);
    useEffect(() => {
        return () => {
            // 卸载
            // if (myChart) {
            //     myChart.dispose();
            // }
        };
    }, [option]);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
            ref={el}
        ></div>
    );
}

export default ChartsBox;