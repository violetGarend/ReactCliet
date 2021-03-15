import requset from './request'
export function reqLogin(username,password){
    return requset('/login',{username,password},'post')
}
export function reqAddUser(user){
    return requset('/manage/user/add',user,'post')
}