import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogs } from '@/api/blogApi'
import { ListCache } from '@/store/actions/cacheActions'

import styles from './search.module.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      changeIndex: 0,
      tags: [{
        name: '前端'
      },{
        name: 'node'
      },{
        name: 'js'
      },{
        name: 'react'
      },{
        name: 'vue'
      },{
        name: '其他'
      }]
     }
  }
  changeIndex(index) {
    this.setState({
      changeIndex: index
    })
    let { saveListCache } = this.props
    getBlogs({type:index}).then(res => {
      saveListCache(res.data)
    })
  }
  render() { 
    return ( 
      <div className={styles['search-wrap']}>
        <ul>
          {
            this.state.tags.map((item, index) => {
              return <li className={this.state.changeIndex === index ?styles.active : ''} key={index} onClick={() => this.changeIndex(index)}>{item.name}</li>
            })
          }
        </ul>
        <span className={styles['search-bar']}>
          <input className={styles['search-content']}></input>
          <input value='搜索' readOnly='readonly' className={styles['search-btn']}></input>
        </span>
      </div>  
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveListCache: (cache) => dispatch(ListCache(cache))
  }
}
 
export default connect(null, mapDispatchToProps)(Search)
