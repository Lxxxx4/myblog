import styles from './App.module.scss'
import React, { Fragment, Component } from 'react'
import Header from '@/components/header'
import Home from '@/pages/home'
import Blog from '@/pages/blog/blog'
import Motto from '@/pages/motto/motto'
import AudioPlayer from '@/components/audioPlayer/audioPlayer'
import music from '@/assets/mp3/music.mp3'

import { Layout } from 'antd'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'

const { Content } = Layout

class App extends Component {
  state = { 
    navList: [
      {to: '', name: '首页', url:'/index'},
      {to: '', name: '名人名言', url:'/motto'},
      {to: '', name: '博客', url:'/blog'},
      {to: '', name: '时间轴', url:'/5'},
    ]
  }
  render() { 
    return ( 
      <Fragment>
        <Router>
          <Layout>
            <Header>
              <div className={styles.navlist}>
                {this.state.navList.map((item, index) => {
                  return (
                    <NavLink to={item.url} activeClassName={styles.active} className={styles['router-item']} key={index}>
                      {item.name}
                    </NavLink>
                  )
                })}
              </div>
            </Header>
            <Content className={styles.content}>
              <Switch>
                <Route exact path="/index" component={Home}></Route>
                <Route exact path="/blog" component={Blog}></Route>
                <Route exact path="/motto" component={Motto}></Route>
                <Redirect from='/*' to='/index' />
              </Switch>
            </Content>
            <AudioPlayer musicName='情人' author='蔡徐坤' musicUrl={music}></AudioPlayer>
          </Layout>
        </Router>
      </Fragment>  
     )
  }
}
 
export default App
