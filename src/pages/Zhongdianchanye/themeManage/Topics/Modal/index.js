/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2023-02-27 19:31:33
 * @LastEditors: dengtao
 * @LastEditTime: 2023-03-03 14:43:24
 * @FilePath: \cloud\src\pages\Zhongdianchanye\themeManage\Topics\Modal\index.js
 * @Descripttion: 
 */
import { useState, Fragment } from 'react';
import styles from './style.less'
const list = [
    {
        name: '基本信息', id: 1, informationLeft: [
            { name: '企业名称', id: 1, value: '大冶集团有色金属集团控股有限公司' },
            { name: '注册日', id: 2, value: '1989-07-28' },
            { name: '营业期限', id: 3, value: '1989-07-28至-' },
            { name: '注册地址', id: 4, value: '黄石市下陆大道115号' },
            { name: '经营地址', id: 5, value: '黄石市下陆大道115号' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '张晋军' },
            { name: '注册资本', id: 10, value: '633,300.9166万' },
            { name: '联系方式', id: 11, value: '0715-8068968' },
            { name: '邮箱编码', id: 12, value: '437000' },
            { name: '企业邮箱', id: 13, value: '1549933@qq.com' },
        ],
        bar: [
            { name: '投资机构名称', id: 1 },
            { name: '股份占比', id: 2 },
            { name: '投资来源', id: 3 },
            { name: '发布日期', id: 4 },
        ]
    },
    {
        name: '经营风险', id: 2, informationLeft: [
            { name: '企业名称', id: 1, value: '暂无数据' },
            { name: '注册日', id: 2, value: '1989-07-28' },
            { name: '营业期限', id: 3, value: '1989-07-28至-' },
            { name: '注册地址', id: 4, value: '暂无数据' },
            { name: '经营地址', id: 5, value: '暂无数据' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '暂无数据 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '暂无数据' },
            { name: '注册资本', id: 10, value: '633,300.9166万' },
            { name: '联系方式', id: 11, value: '0715-8068968' },
            { name: '邮箱编码', id: 12, value: '437000' },
            { name: '企业邮箱', id: 13, value: '15暂无数据.com' },
        ],
        bar: [
            { name: '投资机构名称', id: 1 },
            { name: '股份占比', id: 2 },
            { name: '投资来源', id: 3 },
            { name: '发布日期', id: 4 },
        ]
    },
    {
        name: '司法风险', id: 3, informationLeft: [
            { name: '企业名称', id: 1, value: '暂无数据' },
            { name: '注册日', id: 2, value: '1989-07-28' },
            { name: '营业期限', id: 3, value: '1989-07-28至-' },
            { name: '注册地址', id: 4, value: '暂无数据' },
            { name: '经营地址', id: 5, value: '黄石市下陆大道115号' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '张晋军' },
            { name: '注册资本', id: 10, value: '黄石市下陆大道115号' },
            { name: '联系方式', id: 11, value: '0715-8068968' },
            { name: '邮箱编码', id: 12, value: '437000' },
            { name: '企业邮箱', id: 13, value: '1549933@qq.com' },
        ],
        bar: [
            { name: '投资机构名称', id: 1 },
            { name: '股份占比', id: 2 },
            { name: '投资来源', id: 3 },
            { name: '发布日期', id: 4 },
        ]
    },
    {
        name: '企业舆情', id: 4, informationLeft: [
            { name: '企业名称', id: 1, value: '大冶集团有色金属集团控股有限公司' },
            { name: '注册日', id: 2, value: '1989-07-28' },
            { name: '营业期限', id: 3, value: '1989-07-28至-' },
            { name: '注册地址', id: 4, value: '黄石市下陆大道115号' },
            { name: '经营地址', id: 5, value: '黄石市下陆大道115号' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '张晋中' },
            { name: '注册资本', id: 10, value: '633,300.9166万' },
            { name: '联系方式', id: 11, value: '0715-8068968' },
            { name: '邮箱编码', id: 12, value: '437000' },
            { name: '企业邮箱', id: 13, value: '1549933@qq.com' },
        ],
        bar: [
            { name: '投资机构名称', id: 1 },
            { name: '股份占比', id: 2 },
            { name: '投资来源', id: 3 },
            { name: '发布日期', id: 4 },
        ]
    },
    {
        name: '知识产权', id: 5, informationLeft: [
            { name: '企业名称', id: 1, value: '暂无数据' },
            { name: '注册日', id: 2, value: '2017-04-19' },
            { name: '营业期限', id: 3, value: '2017-04-19至-' },
            { name: '注册地址', id: 4, value: '暂无数据' },
            { name: '经营地址', id: 5, value: '暂无数据' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电暂无数据：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '暂无数据' },
            { name: '法定代表人', id: 9, value: '暂无数据' },
            { name: '注册资本', id: 10, value: '633,300.9166万' },
            { name: '联系方式', id: 11, value: '0715-8068968' },
            { name: '邮箱编码', id: 12, value: '437000' },
            { name: '企业邮箱', id: 13, value: '暂无数据@qq.com' },
        ],
        bar: [
            { name: '投资机构名称', id: 1 },
            { name: '股份占比', id: 2 },
            { name: '投资来源', id: 3 },
            { name: '发布日期', id: 4 },
        ]
    },
]
const Index = ({ isModal, modalHandler }) =>
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 小Li高亮
    // const [liActive, setLiActive] = useState(list[0])
    const [liActive, setLiActive] = useState(list[0])
    // 模态框关闭按钮
    const closeClick = () =>
    {
        // setIsModalOpen(false)
        modalHandler(null)
    }

    // 修改弹框按钮的高亮
    const liClickHandler = (itemObj) =>
    {
        setLiActive(itemObj)
    }
    // 人员信息模块
    const information = () =>
    {
        return (
            <Fragment>
                <div className={styles.messageBox}>
                    <div className={styles.left}>
                        {liActive?.informationLeft.map(item => (
                            // 最后一个元素要宽一些
                            <div style={{ width: item.name === '经营范围' ? '980px' : null }} className={styles.item}>
                                <div className={styles.key}>{item.name}</div>
                                <div className={styles.value}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.right}>
                        {liActive?.informationRight.map(item => (
                            <div className={styles.item}>
                                <div className={styles.key}>{item.name}</div>
                                <div className={styles.value}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <div style={{ display: !isModal ? 'none' : 'block' }} className={`${styles.modal} ${isModal ? styles.fadeIn : styles.fadeEnd}`}>
            <div className={styles.close}><img onClick={closeClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
            <div className={styles.title}>大冶集团有色金属集团控股有限公司</div>
            {/* 顶部按钮 */}
            {list.map(item => (
                <div onClick={() => { liClickHandler(item) }} className={`${styles.list} ${liActive === item ? styles.liActive : null}`} key={item.id}>{item.name}</div>
            ))}
            {/* 基本信息模块 */}
            <p>基本信息</p>
            {information()}
            {/* 股权投资模块 */}
            <p>股权投资</p>
            <div className={styles.bar}>
                {liActive?.bar?.map((data, index) => (
                    <div className={styles.bar_item} key={index}>{data.name}</div>
                ))}
            </div>
            <div className={styles.bar_center}>
                暂无数据
            </div>
            {/* 主要股东模块 */}
            <p>主要股东</p>
        </div>
    );
};
export default Index