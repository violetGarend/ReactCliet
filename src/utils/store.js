import store from 'store'
const USER_KEY = 'user_key'
export function setUser(user){
    store.set(USER_KEY,user)
}
export function getUser(){
    return store.get(USER_KEY) || {}
}
export function reUser(){
    store.remove(USER_KEY)
}