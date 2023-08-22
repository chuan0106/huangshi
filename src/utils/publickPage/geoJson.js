// 县市区
import dayeshi from '@/assets/huangshi/common/dayeshi.png'
import gongyeyuanqu from '@/assets/huangshi/common/gongyeyuanqu.png'
import tieshanqu from '@/assets/huangshi/common/tieshanqu5.png'
import tieshanqu1 from '@/assets/huangshi/common/tieshanqu.png'
import xialuqu from '@/assets/huangshi/common/xialuqu.png'
import xisaishanqu from '@/assets/huangshi/common/xisaishanqu.png'
import yangxinxian from '@/assets/huangshi/common/yangxinxian.png'
import huangshigangqu from '@/assets/huangshi/common/huangshigangqu.png'

// 全省市州
import enshishijiazu from '../../assets/huangshi/common/hubei/enshishijiazu.png'  // 恩施氏家族
import ezhou from '../../assets/huangshi/common/hubei/ezhou.png'  // 鄂州
import huanggang from '../../assets/huangshi/common/hubei/huanggang.png'  // 黄冈
import huangshi from '../../assets/huangshi/common/hubei/huangshi.png'  // 黄石
import hubei from '../../assets/huangshi/common/hubei/hubei.png'  // 湖北
import jingmen from '../../assets/huangshi/common/hubei/jingmen.png'  // 荆门
import jingzhou from '../../assets/huangshi/common/hubei/jingzhou.png'  // 荆州
import qianjiang from '../../assets/huangshi/common/hubei/qianjiang.png'  // 潜江
import shennongjia from '../../assets/huangshi/common/hubei/shennongjia.png'  // 神农架
import shiyan from '../../assets/huangshi/common/hubei/shiyan.png'  // 十堰
import suizhou from '../../assets/huangshi/common/hubei/suizhou.png'  // 随州
import tianmen from '../../assets/huangshi/common/hubei/tianmen.png'  // 天门
import wuhan from '../../assets/huangshi/common/hubei/wuhan.png'  // 天门
import xiangyang from '../../assets/huangshi/common/hubei/xiangyang.png'  // 襄阳
import xianning from '../../assets/huangshi/common/hubei/xianning.png'  // 咸宁
import xiantao from '../../assets/huangshi/common/hubei/xiantao.png'  // 仙桃
import xiaogan from '../../assets/huangshi/common/hubei/xiaogan.png'  // 孝感
import yichang from '../../assets/huangshi/common/hubei/yichang.png'  // 宜昌
// huanggang
const shizhou = [
    { name: '大冶市', coordinate: [114.84338503063984, 29.9665390963863] },
    { name: '阳新县', coordinate: [115.11896540083825, 29.837868450028534] },


    { name: '新港(物流)工业园区', coordinate: [115.24984881873824, 30.041248527327838] },
    { name: '西寨山区', coordinate: [115.19114441724787, 30.1570289412583] },
    { name: '黄石港区', coordinate: [115.04257704498333, 30.24805038672657] },
    { name: '下陆区', coordinate: [114.98582646087134, 30.16058490981853] },
    { name: '开发区·铁山区', coordinate: [114.76387834986758, 30.201957203188776] },
]


const geoJson = {
    type: 'FeatureCollection',
    features: [
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "大冶市",
                "coordinates": [114.84548503063984, 29.9776390963863],
                "number": "192.69",
                "img": dayeshi,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "阳新县",
                "coordinates": [115.12496540083825, 29.843868450028534],
                "number": "192.69",
                "img": yangxinxian,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "新港(物流)工业园区",
                "coordinates": [115.24084881873824, 30.105248527327838],
                "number": "192.69",
                "img": gongyeyuanqu,
                "width": 72,
                "height": 49,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "西寨山区",
                "coordinates": [115.16914441724787, 30.1910289412583],
                "number": "192.69",
                "img": xisaishanqu,
                "width": 144,
                "height": 97,
            }
        },

        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "黄石港区",
                "coordinates": [115.04457704498333, 30.25805038672657],
                "number": "192.69",
                "img": huangshigangqu,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "下陆区",
                "coordinates": [114.94892646087134, 30.19358490981853],
                "number": "192.69",
                "img": xialuqu,
                "width": 144,
                "height": 97,
            }
        },
        // {
        //     "type": "Feature",
        //     "properties": '',
        //     "geometry": {
        //         "type": "Point",
        //         "name": "开发区·铁山区",
        //         "coordinates": [114.89187834986758, 30.215957203188776],
        //         "number": "192.69",
        //         "img": tieshanqu,
        //         "width": 242,
        //         "height": 101,
        //     }
        // },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "开发区·铁山区",
                "coordinates": [114.89687834986758, 30.198957203188776],
                "number": "192.69",
                "img": tieshanqu1,
                "width": 242,
                "height": 101,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "开发区·铁山区",
                "coordinates": [115.00997834986758, 30.122957203188776],
                "number": "192.69",
                "img": tieshanqu1,
                "width": 242,
                "height": 101,
            }
        }
    ],
};
const shiGeoJson = {
    type: 'FeatureCollection',
    features: [
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "大冶市",
                "coordinates": [114.84548503063984, 29.9776390963863],
                "number": "192.69",
                "img": dayeshi,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "阳新县",
                "coordinates": [115.12496540083825, 29.843868450028534],
                "number": "192.69",
                "img": yangxinxian,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "新港(物流)工业园区",
                "coordinates": [115.24984881873824, 30.095248527327838],
                "number": "192.69",
                "img": gongyeyuanqu,
                "width": 72,
                "height": 49,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "西寨山区",
                "coordinates": [115.16914441724787, 30.1890289412583],
                "number": "192.69",
                "img": xisaishanqu,
                "width": 144,
                "height": 97,
            }
        },

        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "黄石港区",
                "coordinates": [115.05457704498333, 30.23805038672657],
                "number": "192.69",
                "img": huangshigangqu,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "下陆区",
                "coordinates": [114.94892646087134, 30.19358490981853],
                "number": "192.69",
                "img": xialuqu,
                "width": 144,
                "height": 97,
            }
        },
        // {
        //     "type": "Feature",
        //     "properties": '',
        //     "geometry": {
        //         "type": "Point",
        //         "name": "开发区·铁山区",
        //         "coordinates": [114.89187834986758, 30.215957203188776],
        //         "number": "192.69",
        //         "img": tieshanqu,
        //         "width": 242,
        //         "height": 101,
        //     }
        // },
        // {
        //     "type": "Feature",
        //     "properties": '',
        //     "geometry": {
        //         "type": "Point",
        //         "name": "开发区·铁山区",
        //         "coordinates": [114.89687834986758, 30.198957203188776],
        //         "number": "192.69",
        //         "img": tieshanqu,
        //         "width": 242,
        //         "height": 101,
        //     }
        // },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "开发区·铁山区",
                "coordinates": [115.09997834986758, 30.122957203188776],
                "number": "192.69",
                "img": tieshanqu1,
                "width": 242,
                "height": 101,
            }
        }
    ],
};

const quanshengGeoJson = {
    type: 'FeatureCollection',
    features: [
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "十堰",
                "coordinates": [114.82215044686252, 30.21622645282027],
                "number": "192.69",
                "img": shiyan,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "神农架",
                "coordinates": [114.78921676280285, 30.054287862235824],
                "number": "192.69",
                "img": shennongjia,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "宜昌",
                "coordinates": [114.8548726025282, 29.90218996479442],
                "number": "192.69",
                "img": yichang,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "恩施氏家族",
                "coordinates": [114.62304844133166, 29.784912626237084],
                "number": "192.69",
                "img": enshishijiazu,
                "width": 158,
                "height": 66,
            }
        },

        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "襄阳",
                "coordinates": [114.9459076198667, 30.13175772968546],
                "number": "192.69",
                "img": xiangyang,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "荆门",
                "coordinates": [115.03261469859703, 29.985588865361784],
                "number": "192.69",
                "img": jingmen,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "荆州",
                "coordinates": [115.06782912518364, 29.76503690683303],
                "number": "192.69",
                "img": jingmen,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "随州",
                "coordinates": [115.13696633252422, 30.127397043611914],
                "number": "192.69",
                "img": suizhou,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "孝感",
                "coordinates": [115.2046553254273, 30.002125374131136],
                "number": "192.69",
                "img": xiaogan,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "天门",
                "coordinates": [115.13221503681743, 29.912759843883716],
                "number": "192.69",
                "img": tianmen,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "潜江",
                "coordinates": [115.07999323905071, 29.843789785646134],
                "number": "192.69",
                "img": qianjiang,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "仙桃",
                "coordinates": [115.1723148108546, 29.846397906654722],
                "number": "192.69",
                "img": xiantao,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "武汉",
                "coordinates": [115.25922961254841, 29.92823581936693],
                "number": "192.69",
                "img": wuhan,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "鄂州",
                "coordinates": [115.32447369100538, 29.880504065887816],
                "number": "192.69",
                "img": ezhou,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "黄冈",
                "coordinates": [115.40330499414804, 29.92520768754519],
                "number": "192.69",
                "img": huanggang,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "咸宁",
                "coordinates": [115.25143100891862, 29.71617407609311],
                "number": "192.69",
                "img": xianning,
                "width": 94,
                "height": 64,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "黄石",
                "coordinates": [115.36996540083825, 29.793868450028534],
                "number": "192.69",
                "img": huangshi,
                "width": 94,
                "height": 64,
            }
        }
    ],
};
export { shizhou, geoJson, shiGeoJson, quanshengGeoJson }