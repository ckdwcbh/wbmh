// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

// 引入 ApiHeader
// import { format } from '@/utils/apiHeader'

/**
 * 获取首页数据
 */
export const getDate = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/home/page_recommend_list',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      mca: 'h5_recommend_female',
      _type: 'h5'
    }
  })
}
