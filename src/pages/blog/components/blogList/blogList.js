import styles from './blogList.module.scss'
import React, { Component } from 'react'
import ArticleCard from '../acticleCard/acticleCard'
import { getBlogs } from '@/api/blogApi'
import { NavLink } from 'react-router-dom'
import { ListCache, ScrollTop } from '@/store/actions/cacheActions'
import { connect } from 'react-redux'


function getScrollTop () {
  let scrollTop = 0
  if(document.documentElement&&document.documentElement.scrollTop){ 
    scrollTop = document.documentElement.scrollTop
  }else if(document.body){ 
    scrollTop = document.body.scrollTop;
  }
  return scrollTop
}
function setScrollTop (scrollTop) {
  if(document.documentElement&&document.documentElement.scrollTop){ 
    document.documentElement.scrollTop = scrollTop 
  }else if(document.body){ 
    document.body.scrollTop = scrollTop 
  }
}

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
    }
  }
  componentDidMount() {
    console.log(this.props)
    let { listCache, scrollTop, saveListCache } = this.props
    if (listCache.length === 0) {
      getBlogs({type: ''}).then(res => {
        if(res.code === 0) {
          saveListCache(res.data)
        } else {
          console.log(res.msg)
        }
      })
    } else {
      setScrollTop(scrollTop)
    }
  }
  saveCache = () => {
    this.props.saveScrollTop(getScrollTop())
  }
  render() { 
    let listCache = this.props.listCache 
    return ( 
        <div className={styles['blogs-content']}>
          <div className={styles['content-left']}>
            {
              listCache.length? listCache.map((item, index) => {
                return (
                  <NavLink  onClick={this.saveCache} key={item._id } to={{pathname: `/article/${item._id}`, state: {content: item.content}}}>
                    <ArticleCard title={item.title}  profile={item.profile}></ArticleCard>
                  </NavLink>
                )
              }) : '暂无数据'
            }
          </div>
          <div className={styles['content-right']}></div>
        </div>
     )
  }
}

let mapStateToProps = (state) => ({
  listCache: state.cacheReducers.listCache,
  scrollTop: state.cacheReducers.scrollTop
})
function mapDispatchToProps(dispatch) {
  return {
    saveListCache: (cache) => dispatch(ListCache(cache)),
    saveScrollTop: (dis) => dispatch(ScrollTop(dis))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)