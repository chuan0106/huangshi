/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2022-01-19 18:06:57
 * @LastEditors: dengtao
 * @LastEditTime: 2023-03-03 14:56:51
 * @FilePath: \cloud\src\layouts\Category\index.js
 * @Descripttion: 
 */
/* eslint-disable no-useless-constructor */

import React from "react";
import styles from "./styles.less";
import { connect } from "dva";
import DocumentTitle from "react-document-title";
import pathToRegexp from "path-to-regexp";
import { Helmet } from "react-helmet";
import { ThemeContext } from "@/utils/theme/customTheme";
import Header from "./components/Header";
import logo from "@/assets/HomeLayout/logo.jpg"; //浏览器页签左边的小icon
import Menu from './components/Menu'
import Select from './components/Select'
const projetcName = "富阳里山村";
//分辨率配置
 const screenSize = {
    width: 2560,
    height: 1080,

};
const screenRatio= ()=>
{
    // alert(document.body.clientWidth / screenSize.width);
    return document.body.clientWidth / screenSize.width;
}
function mapStateToProps({ globalModel, }) {
    return {
        globalModel: globalModel,
    };
}
@connect(mapStateToProps)

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //获取当前项目的菜单
        let addId = 185;
        let { dispatch } = this.props;
        dispatch({ type: 'globalModel/setModelID', payload: addId });
        dispatch({ type: 'globalModel/getMenuListEffects' });
    }
    //修改浏览器页签标题
    getPageTitle = () => {
        const {
            route: { routes },
            location
        } = this.props;
        const { pathname } = location;
        let title = projetcName;
        for (let variable in routes) {
            if (routes.hasOwnProperty(variable)) {
                if (
                    routes[variable].path &&
                    pathToRegexp(routes[variable].path).test(pathname)
                ) {
                    title = projetcName + `  ${routes[variable].name}`;
                }
            }
        }
        return title;
    };

    render() {
        let { modelID } = this.props.globalModel;
        const { children,menuActive } = this.props;
            return (
            // <DocumentTitle title={this.getPageTitle()}>
            <div className={styles.normal} style={{ height: screenSize.height * screenRatio() }} id='roottwo'>
                <div className={styles.container} style={{
                    width: screenSize.width,
                    height: screenSize.height,
                    transform: `scale(${screenRatio()}) rotate(0deg)`,
                }}>
                    {/* <Select /> */}
                    <Menu name={menuActive} />
                    {children}
                   
                      
                  
                </div>

            </div>
        );
    }
}
export default Home;
