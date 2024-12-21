import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

class YCRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.instance.request({ ...config, method: "get" })
  }
  post(config) {
    return this.instance.request({ ...config, method: "post" })
  }
}

// 赋值给具名变量
const ycRequestInstance = new YCRequest(BASE_URL, TIMEOUT);

// 导出具名变量
export default ycRequestInstance;
