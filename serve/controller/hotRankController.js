const Crawler = require("crawler")
const path = require('path')
const {WEI_BO_HOT_RANK_URL, WEI_BO_BASE_BASE_URL, JUE_JIN_HOT_RANK_URL, SEGMENT_FAULT_HOT_RANK_URL, SEGMENT_FAULT_BASE_BASE_URL} = require(path.resolve(".", './config/config'))

var c = new Crawler({
  maxConnections : 10,
})

// 微博热点新闻排名
function hotRank_weibo(req, response) {
  let hotList = []
  c.queue({
    // 网页地址
    uri: WEI_BO_HOT_RANK_URL,
    // 回调，会覆盖全局配置
    callback : function (error, res, done) {
      if(error){
        response.status(500)
      }else{
          var $ = res.$
          const data = $('.data tbody tr')
          data.each(function(index, element) {
            let $element = $(element)
            let hotRank = $element.find('.td-01').text()
            let content = $element.find('.td-02 a').text()
            let href = $element.find('.td-02 a').attr('href')
            let hotLevel = $element.find('.td-02 span').text()
            let hotItem = {
              hotRank: hotRank,
              content: content,
              href: WEI_BO_BASE_BASE_URL + href,
              hotLevel: hotLevel
            }
            hotList.push(hotItem)
          })
      }
      response.status(200).json(hotList)
      done()
  }})
}
// 掘金热点新闻排名
function hotRank_juejin (req, response) {
  let hotList = []
  c.queue({
    // 网页地址
    uri: JUE_JIN_HOT_RANK_URL,
    method: 'POST',
    headers: {"X-Agent": 'juejin/Web'},
    json : {
      "extensions": {"query": {"id": "653b587c5c7c8a00ddf67fc66f989d42"}},
      "operationName": "",
      "query": "",
      "variables": {"tags": [], "category": "5562b415e4b00c57d9b94ac8", "first": 20, "after": "", "order": "THREE_DAYS_HOTTEST"}
    },
    // 回调，会覆盖全局配置
    callback : function (error, res, done) {
      if(error){
        response.status(500)
      }else{
          let data = res.body.data.articleFeed.items.edges
          data.forEach(function(item, index) {
            let hotItem = {
              hotRank: index + 1,
              content: item.node.title,
              href: item.node.originalUrl,
              hotLevel: parseInt(item.node.hotIndex)
            }
            hotList.push(hotItem)
          })
      }
      response.status(200).json(hotList)
      done()
  }})
}
function hotRank_segmentfault (req, response) {
  let hotList = []
  c.queue({
    // 网页地址
    uri: SEGMENT_FAULT_HOT_RANK_URL,
    method: 'GET',
    
    // 回调，会覆盖全局配置
    callback : function (error, res, done) {
      if(error){
        response.status(500)
      }else{
        var $ = res.$
        const data = $('.news__item-info')
        console.log(data)
        data.each(function(index, element) {
          let $element = $(element)
          let content = $element.find('a .news__item-title').text()
          let href = $element.find('a').attr('href')
          let hotItem = {
            hotRank: index + 1,
            content: content,
            href: SEGMENT_FAULT_BASE_BASE_URL + href,
            hotLevel: 0
          }
          hotList.push(hotItem)
        })
      }
      response.status(200).json(hotList)
      done()
  }})
}

module.exports = {
  hotRank_weibo: hotRank_weibo,
  hotRank_juejin: hotRank_juejin,
  hotRank_segmentfault: hotRank_segmentfault
}