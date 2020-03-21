//访问cookie   npm i js-cookie
import Cookies from 'js-cookie'
//获取
export function getToken() {
  return Cookies.get("token")
}
//设置
export function setToken(token) {
  return Cookies.set("token",token)
}
//移除
export function removeToken() {
  return Cookies.remove("token")
}