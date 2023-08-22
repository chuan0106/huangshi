/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月9日
 * @author lqq
 * @desc
 *
 */
import { log } from 'deck.gl';
import request from './request';
import signature from './signature';
// import umiRequest from './umiRequest'
/**
 *
 *
 * @param  {string} path  接口路径
 * @param  {object} [params]  参数
 * @param  {string} post 请求类型
 * @return {object}   返回请求值 data or err
 */

export default function networkRequest (path, params, post, workspaceFilterStatus)
{
    switch (post)
    {
        case 'get':
            return getRequst(path, params, post, workspaceFilterStatus);
        case 'post':
            return postRequst(path, params, post, workspaceFilterStatus);
        case 'postAutoGraph':
            return postAutoGraphRequst(path, params, post, workspaceFilterStatus);
        case 'post1':
            return postgetRequst(path, params, post, workspaceFilterStatus);
        case 'postArr':
            return postArrRequst(path, params, post);
        case 'postHk':
            return postHkRequst(path, params, post);

        case 'login':
            return loginRequst(path, params, post, workspaceFilterStatus);
        case 'getLogin':
            return getLoginRequst(path, params, post, workspaceFilterStatus);
        case 'upImage':
            return upImageRequst(path, params, post, workspaceFilterStatus);
        case 'fromPost':
            return fromPostRequst(path, params, post, workspaceFilterStatus);
        case 'ydPost':
            return ydPostRequst(path, params, post, workspaceFilterStatus);
        //   return getRequst(path, params, post, workspaceFilterStatus);
        default:
    }
}

//登录请求
export async function fromPostRequst (path, params, post)
{
    return request(path, {
        method: 'post',
        'Cache-Control': 'no-cache',
        body: params,
    });
}

export async function getRequst (path, params, post, workspaceFilterStatus)
{
    let accessToken = localStorage.getItem('cookie');
    let params2;
    if (workspaceFilterStatus)
    {
        params2 = {
            ...params,
            workspaceId:
                localStorage.getItem('workspaceListChoose') !== '' &&
                    localStorage.getItem('workspaceListChoose') !== undefined &&
                    localStorage.getItem('workspaceListChoose') !== null
                    ? localStorage.getItem('workspaceListChoose')
                    : '',
        };
    } else
    {
        params2 = {
            ...params,
        };
    }
    return request(path + dicToString(params2), {
        method: 'get',
        headers: {
            //'Cache-Control': 'no-cache',
            Accept: 'application/json',
            //Authorization: accessToken
        },
    });
}
//sso请求
export async function getLoginRequst (path, params, post, workspaceFilterStatus)
{
    let accessToken = sessionStorage.getItem('tokenID');
    console.log(accessToken, 'accessTokenaccessToken');
    return request(path, {
        method: 'get',
        redirect: "follow",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: accessToken,
        },
    });
}

//getpost请求
export async function postgetRequst (path, params, post, workspaceFilterStatus)
{
    let accessToken = localStorage.getItem('cookie');
    let params2;
    if (workspaceFilterStatus)
    {
        params2 = {
            ...params,
            workspaceId:
                localStorage.getItem('workspaceListChoose') !== '' &&
                    localStorage.getItem('workspaceListChoose') !== undefined &&
                    localStorage.getItem('workspaceListChoose') !== null
                    ? localStorage.getItem('workspaceListChoose')
                    : '',
        };
    } else
    {
        params2 = {
            ...params,
        };
    }
    return request(path + dicToString(params2), {
        method: 'post',
        headers: {
            'Cache-Control': 'no-cache',
            Accept: 'application/json',
            Authorization: accessToken,
        },
    });
}

//登录请求
export async function loginRequst (path, params, post, workspaceFilterStatus)
{
    return request(path, {
        method: 'post',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(params),
    });
}
//post请求   参数为数组
export async function postArrRequst (path, params, post)
{
    // let postParams = params;
    let accessToken = localStorage.getItem('cookie');

    return request(path, {
        method: 'post',
        // credentials: 'include',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: accessToken,
        },
        body: JSON.stringify(params),
    });
}
//海康请求
export async function postHkRequst (path, params)
{
    return request(path, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(params),

    })
}

//更新图片
export async function upImageRequst (path, params, post, workspaceFilterStatus)
{
    let accessToken = localStorage.getItem('cookie');
    return request(path, {
        method: 'post',
        // credentials: 'include',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: accessToken,
        },
        body: params,
    });
}

//post请求
export async function postRequst (path, params, post, workspaceFilterStatus)
{
    // let postParams = params;
    let accessToken = localStorage.getItem('cookie');
    let params2;
    console.log(workspaceFilterStatus, 'workspaceFilterStatus');
    if (workspaceFilterStatus)
    {
        params2 = {
            ...params,
            workspaceId:
                localStorage.getItem('workspaceListChoose') !== '' &&
                    localStorage.getItem('workspaceListChoose') !== undefined &&
                    localStorage.getItem('workspaceListChoose') !== null
                    ? localStorage.getItem('workspaceListChoose')
                    : '',
        };
    } else
    {
        params2 = params;
    }
    return request(path, {
        method: 'post',
        // credentials: 'include',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: accessToken,
        },
        body: JSON.stringify(params2),
    });
}

//带有参数签名的post请求
export async function postAutoGraphRequst (path, params, post, workspaceFilterStatus)
{
    let accessToken = localStorage.getItem('cookie');
    let params2;
    console.log(workspaceFilterStatus, 'workspaceFilterStatus');
    if (workspaceFilterStatus)
    {
        params2 = {
            ...params,
            workspaceId:
                localStorage.getItem('workspaceListChoose') !== '' &&
                    localStorage.getItem('workspaceListChoose') !== undefined &&
                    localStorage.getItem('workspaceListChoose') !== null
                    ? localStorage.getItem('workspaceListChoose')
                    : '',
        };
    } else
    {
        params2 = params;
    }
    let date = new Date().getTime();
    return request(path, {
        method: 'post',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: accessToken,
            timestamp: date,
            signature: signature(date, JSON.parse(JSON.stringify(params2))),
        },
        body: JSON.stringify(params2),
    });
}

//post请求   参数为数组
export async function ydPostRequst (path, params, post)
{
    // let postParams = params;
    let accessToken = localStorage.getItem('ydtoken');
    return request(path, {
        method: 'post',
        // credentials: 'include',
        'Cache-Control': 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: accessToken,
        },
        body: JSON.stringify(params),
    });
}

export function dicToString (params)
{
    if (!params)
    {
        return '';
    }
    if (params instanceof Array)
    {
        return '';
    }
    let gerParam = '';
    for (let variable in params)
    {
        if (params.hasOwnProperty(variable))
        {
            gerParam = gerParam + '&' + variable + '=' + params[variable];
        }
    }
    gerParam = gerParam.substring(1);
    return gerParam;
}
