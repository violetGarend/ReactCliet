import axios from 'axios'

//配置全局baseURL
axios.defaults.baseURL='http://120.55.193.14:5000'
export default function requset(url,data={},type="get"){
    if(type==="get"){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}