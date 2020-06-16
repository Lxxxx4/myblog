import React, { Component, Fragment } from 'react'
import styles from './style.module.scss'
import baidu from '@/assets/icon/baidu.ico'
import biying from '@/assets/icon/biying.ico'
import csdn from '@/assets/icon/csdn.ico'
import github from '@/assets/icon/github.ico'
import gold from '@/assets/icon/gold.png'
import google from '@/assets/icon/google.png'
import oschina from '@/assets/icon/oschina.ico'
import segmentfault from '@/assets/icon/segmentfault.png'
import zhihu from '@/assets/icon/zhihu.ico'

class SearchEngine extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      siteList: [{
        name: '百度',
        addr: 'https://www.baidu.com/',
        icon: baidu,
        searchAddr: 'https://www.baidu.com/s?wd='
      },
      {
        name: 'github',
        addr: 'https://github.com/',
        icon: github,
        searchAddr: 'https://github.com/search?q='
      },
      {
        name: 'google',
        addr: 'http://www.google.cn/',
        icon: google,
        searchAddr: 'https://www.google.com/search?q='
      },
      {
        name: 'csdn',
        addr: 'https://www.csdn.net/',
        icon: csdn,
        searchAddr: 'https://so.csdn.net/so/search/s.do?q='
      },
      {
        name: '掘金',
        addr: 'https://juejin.im/timeline',
        icon: gold,
        searchAddr: 'https://juejin.im/search?query='
      },
      {
        name: 'oschina',
        addr: 'https://www.oschina.net/',
        icon: oschina,
        searchAddr: 'https://www.oschina.net/search?q='
      },
      {
        name: '思否',
        addr: 'https://segmentfault.com/',
        icon: segmentfault,
        searchAddr: 'https://segmentfault.com/search?q='
      },
      {
        name: '知乎',
        addr: 'https://www.zhihu.com/',
        icon: zhihu,
        searchAddr: 'https://www.zhihu.com/search?q='
      },
      {
        name: '必应',
        addr: 'https://cn.bing.com/',
        icon: biying,
        searchAddr: 'https://cn.bing.com/search?q='
      }],
      index: 0,
      inputValue: ''
    }
  }
  
  changeIndex(index) {
    this.setState({
      index: index
    })
  }
  navigateTo(addr) {
    let win = window.open(addr, '_blank');
    win.focus();  
  }
  search () {
    let index= this.state.index
    let inputVaule = this.state.inputValue
    let addr = this.state.siteList[index].searchAddr + inputVaule
    let win = window.open(addr, '_blank');
    win.focus();  
  }
  inputChange(e) {
    e.persist()
    this.setState({
      inputValue: e.target.value
    })
  }

  render() { 
    return ( 
      <Fragment>
        <div className={styles['search-wrap']}>
          <ul className={styles['site-list']}>
              {this.state.siteList.map( (item, index) => {
                return (
                    <li key={index} className={this.state.index === index? styles.active: ''} onClick={() => this.changeIndex(index)} onDoubleClick={() => this.navigateTo(item.addr)}>
                      <img src={item.icon} alt=''></img>
                      <span>{item.name}</span>
                    </li>
                )
              })}
          </ul>
          <div className={styles['search-bar']}>
            <div className={styles['search-input']}>
              <input type='text' placeholder='请输入搜索内容' value={this.state.inputValue} autoFocus='autoFocus' onChange={ (e) => this.inputChange(e) }></input>
            </div>
              <button className={[styles['search-btn'],'btn'].join(' ')} onClick={() => this.search()}>立即搜索</button>
          </div>
        </div>
      </Fragment>
      
    )
  }
}
 
export default SearchEngine