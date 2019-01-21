import Axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-ui';
Axios.defaults.timeout = 5000; //响应时间
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b1a157502cb10260775e2ba/baseElement/';
export default {
    $get:(url,data) => {
        return Axios.get(url,{params:data}).catch(e => {
            console.log(e);
            Message({
              message: '请求错误',
              type: 'error'
            })
        });
    },
    $post:(url,data) => {
        return Axios.post(url,qs.stringify(data)).catch(e => {
            console.log(e);
            Message({
              message: '请求错误',
              type: 'error'
            })
        });
    }
}