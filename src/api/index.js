// 当前模块对API进行统一管理
import request from './request'

export const UserLogin = (data) => {
  //发请求
  return request({
    url: 'login',
    method: 'post',
    data,
  })
}

export const getMenuList = ()=>{
    return  request({
        url:'menus',
        method:'get'
    })
}

export const getUserList = (params)=>{
    return request({
        url:'users',
        method:'get',
        params
    })
}

