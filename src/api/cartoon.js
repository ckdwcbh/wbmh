// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

// 引入 ApiHeader
// import { format } from '@/utils/apiHeader'

/**
 * 获取首页数据
 * http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5
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

export const getHotSeatch = () => {
  return request({
    url: '/api/wbcomic/home/hot_wordst',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      _type: 'h5'
    }
  })
}

export const getComicEnd = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/home//recommend_list/recommend_list',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      location_en: 'ending_works_list',
      _type: 'h5'
    }
  })
}
