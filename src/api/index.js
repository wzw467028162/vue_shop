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
