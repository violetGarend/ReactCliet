import requset from './request'
import axios from 'axios'
export function reqLogin(username,password){
    return requset('/login',{username,password},'post')
}
export function reqAddUser(user){
    return requset('/manage/user/add',user,'post')
}
//获取天气
export function getWeather(params){
    return axios.get('https://v0.yiketianqi.com/api',{params})
}


//分类的请求
//获取分类列表
export function reqCategorys(parentId){
    return requset('/manage/category/list',{parentId})
}
//添加分类
export function reqAddCategorys(categoryName,parentId){
    return requset('/manage/category/add',{categoryName,parentId},'post')
}
//更新分类
export function reqUpdateCategorys(categoryId,categoryName){
    return requset('/manage/category/update',{categoryId,categoryName},'post')
}