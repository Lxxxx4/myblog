import React, { Component } from 'react'
import styles from './style.module.scss'
import { Tooltip } from 'antd'
import { hotRank_weibo, hotRank_juejin, hotRank_segmentfault } from '@/api/hotRankApi'

function trans2unit (item)  {
  let hotLevel = parseInt(item.hotLevel / 10000) 
  if (hotLevel < 1 ) {
    return parseInt(item.hotLevel)
  } else {
    return hotLevel + 'W'
  }
}

class HotSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navList: [{
        name: '微博',
        title: '微博实时热搜',
        func: hotRank_weibo
      },{
        name: '掘金',
        title: '掘金实时热搜',
        func: hotRank_juejin
      },{
        name: '思否',
        title: '思否实时热搜',
        func: hotRank_segmentfault
      }],
      title: '微博实时热搜',
      
      currentList: []
    }
  }
  componentDidMount() {
    hotRank_weibo().then(res => {
      this.setState({
        newList: res,
        currentList: res.slice(1,11),
        currentIndex: 0
      })
    })
  }
  refresh() {
    let lentgh = Math.floor(this.state.newList.length / 10)
    let currentIndex = this.state.currentIndex
    currentIndex = currentIndex >= lentgh ? 1: ++currentIndex
    let currentList = this.state.newList.slice(((currentIndex - 1) * 10 + 1), (currentIndex * 10 + 1))
    this.setState({
      currentList: currentList,
      currentIndex: currentIndex
    })
  }
  changeIndex (index) {
    this.state.navList[index].func().then(res => {
      this.setState({
        title: this.state.navList[index].title,
        newList: res,
        currentList: res.slice(0, 10),
        currentIndex: index
      })
    })
  }
  render() { 
    return (  
      <div className={styles['hot-search']}>
        <h6 className={styles['hs-header']}>
          <ul>
            {
              this.state.navList.map((item, index) => {
                return (
                  <li  className={this.state.currentIndex === index?styles.active: ''} key={index} onClick={ () => this.changeIndex(index)}>{item.name}</li>
                )
              })
            }
          </ul>
          <div className={styles['hs-title']}>
            <span className='card-tit'>{this.state.title}</span>
            <span className={styles['card-refresh']} onClick={() => this.refresh()}>
              <i className={['iconfont', 'icon-refresh'].join(' ')} style={{marginRight: '10px', fontSize: '14px'}}></i>
              <span>换一批</span>
            </span>
          </div>
        </h6>
        <div className={styles['new-list']}>
          <ul>
            {this.state.currentList.map((item, index) => {
              return (
                <li className={styles['hs-item']} key={index}>
                    <span className={styles['hs-rank']}>{index + 1}</span>
                    <Tooltip placement="bottom" title={item.content}>
                      <a href={item.href} target='_blank' rel="noopener noreferrer">
                        {item.content}
                      </a>
                    </Tooltip>
                    <span className={styles['hs-hotval']}>
                      {
                         item.hotLevel? trans2unit(item): ''
                      }
                    </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default HotSearch