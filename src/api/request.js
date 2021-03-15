import axios from 'axios'
export default function requset(url,data={},type="get"){
    if(type==="get"){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}