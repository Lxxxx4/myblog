import React, { Component } from 'react'
import styles from './acticleCard.module.scss'
class ActicleCard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={styles['card-item']}>
        <h3 className={styles['card-title']}>{this.props.title}</h3>
        <p className={styles['card-content']}>{this.props.profile}</p>
        <div className={styles['card-info']}>
          <div className={styles.clicks}>
            <i className='iconfont icon-ico-fj-look'></i>
            <span>100</span>
          </div>
          <div className={styles.stars}>
            <i className='iconfont icon-good'></i>
            <span>100</span>
          </div>
          <div className={styles['create-time']}>
            <i className='iconfont icon-date'></i>
            <span>2020-03-03</span>
          </div>
          <div className={styles.tags}>
            <i className='iconfont icon-tags'></i>
            <span>nodejs</span>
            <span>vue</span>
            <span>lazy</span>
          </div>
        </div>
        <div className={styles['blog-orgin']}>
          <span>原创</span>
        </div>
      </div>
     )
  }
}
 
export default ActicleCard