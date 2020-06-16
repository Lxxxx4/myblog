import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
import BlogList from './components/blogList/blogList'
import Article from './components/article/article'
import Search from './components/search/search'
class Blog  extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Search></Search>
        <div style={{backgroundColor: 'rgb(240, 242, 245)'}}>
          <Router>
            <Switch>
              <QueueAnim duration={3000} interval={200}>
                <Route key="transition1" path="/blog" component={BlogList}></Route>
                <Route key="transition2" exact path="/article/*" component={Article}></Route>
              </QueueAnim>
            </Switch>
          </Router>
        </div>
      </Fragment>
     )
  }
}
 
export default Blog