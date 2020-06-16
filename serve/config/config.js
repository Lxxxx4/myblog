module.exports = {
  PORT: 3001,
  HOST: '127.0.0.1',
  // 微博爬虫地址
  WEI_BO_HOT_RANK_URL: 'https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6',
   // 掘金爬虫地址
  JUE_JIN_HOT_RANK_URL: 'https://web-api.juejin.im/query',
  SEGMENT_FAULT_HOT_RANK_URL: 'https://segmentfault.com/channel/frontend',
  SEGMENT_FAULT_BASE_BASE_URL: 'https://segmentfault.com/',
  // 微博基础地址
  WEI_BO_BASE_BASE_URL: 'https://s.weibo.com/',
  // 数据库地址
  DB_URL: 'mongodb://localhost:27017/blog',
  // jwt密钥
  SECRET: 'linx_blog'
}