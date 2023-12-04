import axios from 'axios'
import { AppConfig } from '../configs'
const RestApi = axios.create({
  baseURL: AppConfig.Api.BaseUrl,
  transformResponse: (res) => {
    console.log(res)
    if (res.status === 200) {
      const data = res.data
      return data
    }
  }
})

export { RestApi }
