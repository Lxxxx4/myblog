import { get } from '../request/request'

export const hotRank_weibo = () => get('/hotRank/weibo')
export const hotRank_juejin = () => get('/hotRank/juejin')
export const hotRank_segmentfault = () => get('/hotRank/segmentfault')
