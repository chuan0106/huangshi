import { useState, useCallback, useEffect } from 'react'
import styles from './style.less';
import { connect } from 'dva';
import haedImg from '@/assets/huangshi/quanjugailan/haed-img.png'
const dispatch = window.g_app._store.dispatch;
const menuList = [
    {
        id: 1,
        name: '工业概览',
        screenId: 'a757819a1bea4810bf74c35f2cff0cca',
        hash: '/home',
        img: 'https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=63f7400afd73386cd63bae5c',
        children: 0,
        width: 5280,
        height: 1620,
    },
    {
        id: 2,
        name: '重点产业',
        screenId: '648c2f98c0ed47f0b1b7889f8284ae0f',
        hash: '/zhongdianchanye',
        img: 'https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=63f73b63fd73386cd63bae5b',
        children: 0,
        width: 2560,
        height: 1080
    },
    {
        id: 4,
        name: '重点企业',
        screenId: '9f53c4134a6a41cfaab76e16e45db6d0',
        img: 'https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=63f73b7b11001e3bbe2faa3b',
        hash: '/zhongdianqiye',
        children: 0,
        width: 2560,
        height: 1080
    },
    {
        id: 3,
        name: '重点项目',
        screenId: 'f1352124a9044cca972168de405e5fd0',
        hash: '/zhongdianxiangmu',
        img: 'https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=63f73b7822a0c61cb5300ce2',
        children: 0,
        width: 2560,
        height: 1080
    },

];
const split_array = (arr, length) => {  // arr 是需要拆分的数组 length 是要拆分小数组的数量
    let a_length = arr.length
    let result = []  // 结果数组
    for (let i = 0; i < a_length; i += length) {
        result.push(arr.slice(i, i + length))  // 循环遍历原数组的 N 个元素 每次取从上次取的下一个开始取
    }
    return result  // 把结果数组 return 
}

const Index = ({ activeName, routeName }) => {
    console.log(activeName, 'activeNameactiveName', routeName);
    const useHash = () => {
        const [hash, setHash] = useState(() => window.location.hash);


        const hashChangeHandler = useCallback(() => {
            setHash(window.location.hash);
        }, []);

        useEffect(() => {
            window.addEventListener('hashchange', hashChangeHandler);
            return () => {
                window.removeEventListener('hashchange', hashChangeHandler);
            };
        }, []);

        const updateHash = useCallback(
            newHash => {
                if (newHash !== hash) window.location.hash = newHash;
            },
            [hash]
        );

        return [hash, updateHash];
    };


    const [hash, setHash] = useHash();

    const newDataArr = split_array(menuList, 2)

    const menuClick = (item, _) => {
        dispatch({ type: 'homeModel/getMenuActive', payload: item.name });
        setHash(item.hash)
    }
    return (
        <div className={styles.head}>
            <div className={styles.center}>
                {newDataArr.map((data, index) => (
                    <div key={index} className={styles.item}>
                        {data.map((item, key) => (
                            <div onClick={() => { menuClick(item, key) }} className={styles.core}>
                                <div className={styles.imgBox} key={key}>
                                    <img src={haedImg} alt="" />
                                </div>
                                <div style={{ color: item.name === routeName ? '#fff' : 'rgb(148, 155, 170)' }} className={styles.title}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
function mapStateToProps ({ homeModel }) {
    return { activeName: homeModel.menuActive }
}

export default connect(mapStateToProps)(Index);