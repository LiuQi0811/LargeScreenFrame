/*axios 封装*/
import axios from 'axios'

/*创建axios实例*/
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:9091/',
    timeout: 60000
});





// 导出axios实例
export default axiosInstance;