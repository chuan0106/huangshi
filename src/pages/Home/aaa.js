import dayeshi from '@/assets/huangshi/common/dayeshi.png'
import gongyeyuanqu from '@/assets/huangshi/common/gongyeyuanqu.png'
import tieshanqu from '@/assets/huangshi/common/tieshanqu.png'
import xialuqu from '@/assets/huangshi/common/xialuqu.png'
import xisaishanqu from '@/assets/huangshi/common/xisaishanqu.png'
import yangxinxian from '@/assets/huangshi/common/yangxinxian.png'

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
                "coordinates": [114.83948503063984, 29.9776390963863],
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
                "coordinates": [115.11996540083825, 29.848868450028534],
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
                "coordinates": [115.24084881873824, 30.113248527327838],
                "number": "192.69",
                "img": gongyeyuanqu,
                "width": 350,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "西寨山区",
                "coordinates": [115.16514441724787, 30.1910289412583],
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
                "name": "下陆区",
                "coordinates": [114.94582646087134, 30.20358490981853],
                "number": "192.69",
                "img": xialuqu,
                "width": 144,
                "height": 97,
            }
        },
        {
            "type": "Feature",
            "properties": '',
            "geometry": {
                "type": "Point",
                "name": "开发区·铁山区",
                "coordinates": [114.89187834986758, 30.215957203188776],
                "number": "192.69",
                "img": tieshanqu,
                "width": 242,
                "height": 101,
            }
        }
    ],
};
export { shizhou, geoJson }