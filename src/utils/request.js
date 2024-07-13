// 导入axios
import axios from 'axios'
//1. 创建新的axios实例，
const request = axios.create({
    // 公共接口--这里注意后面会讲
    // 超时时间 单位是ms，这里设置了20s的超时时间
    timeout: 5000
})
export default request  