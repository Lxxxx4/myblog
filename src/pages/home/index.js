import React, { Component, Fragment } from 'react'
import styles from './style.module.scss'
import QueueAnim from 'rc-queue-anim'
import SearchEngine from './components/searchEngine'
import Community from './components/community'
import Slider from './components/slider'
import FooterComp from '@/components/footer/index'
import { Layout } from 'antd'
const { Footer } = Layout



class Home extends Component {
  render() { 
    return ( 
      <Fragment>
        <QueueAnim duration={2000} interval={500}>
          <SearchEngine key="demo1" />
          <Community />
          <div key="demo2" className={styles['content-wrap']}> 
            <Slider />
          </div>
        </QueueAnim>
        <FooterComp></FooterComp>
      </Fragment>
     )
  }
}
 
export default Home