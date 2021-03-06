import axios from 'axios'

const api = axios .create({
    baseURL: '/api',
    timeout: 16000,
});
/*请求拦截，修改报文，（加上token进行鉴权 */
api.interceptors.request.use((req) => {
    return req;
})

//返回拦截
api.interceptors.response.use((res) => {
    return res;
})

export default api;