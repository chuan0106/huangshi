// ! 这个页面暂时不需要弹框 可删！
import { useState, Fragment } from 'react';
import styles from './style.less'

const menuData = [
    { name: '大冶市兴红矿业有限公司', id: 1, region: '大冶市', title: '大冶市兴红矿业' },
    { name: '大冶市金成矿业有限责任公司', id: 2, region: '大冶市', title: '大冶市金成矿业' },
    { name: '武钢资源集团金山店矿业有限公司', id: 3, region: '大冶市', title: '武钢资源集团金山店矿业' },
    { name: '大冶市陈贵大广山矿业有限公司', id: 4, region: '大冶市', title: '大冶市陈贵大广山矿业' },
    { name: '黄石市陈贵铜山口矿业股份有限公司', id: 5, region: '大冶市', title: '黄石市陈贵铜山口矿业' },
    { name: '湖北永志矿建工程有限责任公司', id: 6, region: '开发区·铁山区', title: '湖北永志矿建工程' },
    { name: '武钢资源集团大冶铁矿有限公司', id: 7, region: '开发区·铁山区', title: '武钢资源集团大冶铁' },
    { name: '黄石市鑫溢新材料科技有限公司', id: 8, region: '开发区·铁山区', title: '黄石市鑫溢新材料科技' },
    { name: '阳新县银山矿产品加工有限公司', id: 9, region: '阳新县', title: '阳新县银山矿产品加工' },
    { name: '阳新县兴达矿业有限公司', id: 10, region: '阳新县', title: '阳新县兴达矿业' },
    { name: '阳新县三江矿业有限责任公司', id: 11, region: '阳新县', title: '阳新县三江矿业' },
    { name: '阳新县鑫华矿业有限公司', id: 12, region: '阳新县', title: '阳新县鑫华矿业' },
    { name: '阳新县鑫茂矿业有限责任公司', id: 13, region: '阳新县', title: '阳新县鑫茂矿业' },
    { name: '阳新县鑫晟矿业有限公司', id: 14, region: '阳新县', title: '阳新县鑫晟矿业' },
    { name: '阳新县鑫成矿业有限公司', id: 15, region: '阳新县', title: '阳新县鑫成矿业' },
    { name: '湖北三鑫金铜股份有限公司', id: 16, region: '大冶市', title: '湖北三鑫金铜股份' },
    { name: '大冶市天华矿业有限公司', id: 17, region: '大冶市', title: '大冶市天华矿业' },
    { name: '大冶市大红山矿业有限公司', id: 18, region: '大冶市', title: '大冶市大红山矿业' },
    { name: '大冶市铜山铜铁矿', id: 19, region: '大冶市', title: '大冶市铜山铜铁矿' },
    { name: '大冶市凌志矿产品贸易有限公司', id: 20, region: '大冶市', title: '大冶市凌志矿产品贸易' },

]

const list = [
    {
        name: '基本信息', id: 1, informationLeft: [
            { name: '企业名称', id: 1, value: '湖北捷优电子有限公司' },
            { name: '注册日', id: 2, value: '2017-04-19' },
            { name: '营业期限', id: 3, value: '2017-04-19至-' },
            { name: '注册地址', id: 4, value: '咸安经济开发区浮山办事处孵化园第A幢' },
            { name: '经营地址', id: 5, value: '咸安经济开发区浮山办事处孵化园第A幢' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '朱斌' },
            { name: '注册资本', id: 10, value: '1500.00万' },
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
            { name: '注册日', id: 2, value: '2017-04-19' },
            { name: '营业期限', id: 3, value: '2017-04-19至-' },
            { name: '注册地址', id: 4, value: '暂无数据' },
            { name: '经营地址', id: 5, value: '暂无数据' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '暂无数据 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '暂无数据' },
            { name: '注册资本', id: 10, value: '1500.00万' },
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
            { name: '注册日', id: 2, value: '2017-04-19' },
            { name: '营业期限', id: 3, value: '2017-04-19至-' },
            { name: '注册地址', id: 4, value: '暂无数据' },
            { name: '经营地址', id: 5, value: '咸安经济开发区浮山办事处孵化园第A幢' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '朱斌' },
            { name: '注册资本', id: 10, value: '1500.00万' },
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
            { name: '企业名称', id: 1, value: '湖北捷优电子有限公司' },
            { name: '注册日', id: 2, value: '2017-04-19' },
            { name: '营业期限', id: 3, value: '2017-04-19至-' },
            { name: '注册地址', id: 4, value: '咸安经济开发区浮山办事处孵化园第A幢' },
            { name: '经营地址', id: 5, value: '咸安经济开发区浮山办事处孵化园第A幢' },
            { name: '营业网址', id: 6, value: '' },
            { name: '经营范围', id: 7, value: '电子元器件 通讯器材 机械设备 仪器仪表 连接器 电线电缆 线束生产 组装 加工 销售：某某某地区' },

        ],
        informationRight: [
            { name: '统一社会代码', id: 8, value: '91421202MA48YLUB5P' },
            { name: '法定代表人', id: 9, value: '朱斌' },
            { name: '注册资本', id: 10, value: '1500.00万' },
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
            { name: '注册资本', id: 10, value: '1500.00万' },
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
const index = () =>
{
    // 菜单高亮
    const [menu, setMenu] = useState(null)
    // 小Li高亮
    const [liActive, setLiActive] = useState(list[0])
    // 弹出对话框
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 修改高亮
    const clickHandler = (itemObj) =>
    {
        // setMenu(itemObj)
        // setIsModalOpen(true)
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

    // 模态框关闭按钮
    const closeClick = () =>
    {
        setIsModalOpen(false)
    }
    return (
        <Fragment>
            {/* 弹框 */}
            <div style={{ display: !isModalOpen ? 'none' : 'block' }} className={`${styles.modal} ${isModalOpen ? styles.fadeIn : styles.fadeEnd}`}>
                <div className={styles.close}><img onClick={closeClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.title}>湖北捷优信电子有限公司</div>
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

            {/* 左侧菜单 */}
            <div className={styles.menu}>
                {menuData.map(item => (
                    <div className={styles.item}>
                        <div style={{ backgroundColor: menu === item ? 'rgb(16, 32, 79)' : null }} onClick={() => { clickHandler(item) }} className={styles.box}>
                            <span style={{ fontSize: item?.title.length < 8 ? '24px' : '16px' }} className={styles.title}>{item.title}</span>
                            <div className={styles.classify}>
                                <div style={{ color: 'rgb(27, 142, 109)' }}> <span className={styles.name}>企业数量</span> 123124</div>
                                <div style={{ color: 'rgb(200, 127, 42)' }}> <span className={styles.name}>产量</span>  55667</div>
                                <div style={{ color: 'rgb(28, 74, 126)' }}> <span className={styles.name}>增加值</span>  122312</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};
export default index