import styles  from './style.module.scss'
import React, { Component, Fragment } from 'react'
import Login from './components/login/login'
import Register from './components/register/register'
import AvatarComp from './components/avatar/avatar'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const time = date.toLocaleTimeString()
    this.state = { 
      month: month,
      day: day,
      time: time,
      loginVisible: false,
      regVisible: false,
      activeIndex: 0
    }
  }
  componentWillMount() {
    const timer = setInterval(() => {
      const date = new Date()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const time = date.toLocaleTimeString()
      this.setState({
        month: month,
        day: day,
        time: time
      })
    }, 1000)
    this.setState({
      timer: timer
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  showLoginModal = () => {
    this.setState({
      loginVisible: true,
    })
  }
  showRegModal = () => {
    this.setState({
      regVisible: true,
    })
  }
  handleLoginCancel = e => {
    this.setState({
      loginVisible: false,
    })
  }
  handleRegCancel = e => {
    this.setState({
      regVisible: false,
    })
  }
  render() { 
    const { loginStatus } = this.props
    let content = null
    if (loginStatus) {
      content = <AvatarComp></AvatarComp>
    } else {
      content = (
        <ul className={styles['login-wrap']}>
          <li onClick={this.showLoginModal}>登录</li>
          <li onClick={this.showRegModal}>注册</li>
        </ul>
      )
    }
    return ( 
      <Fragment>
        <header className={styles.header}>
          <div className={styles['header-wrap']}>
            <div className={styles.left}>
              <span className={styles.logo}>Linx.blog</span>
            </div>
            <div className={styles.right}>
              {this.props.children}             
              <div className={styles.datetime}>
                <div className={styles.date}>
                  <span>{this.state.month}</span><i>月</i><span>{this.state.day}</span>
                </div>
                <div className={styles.time}>
                  {this.state.time}
                </div>
              </div>
              { content }
              <Login loginVisible={this.state.loginVisible} handleCancel={this.handleLoginCancel}></Login>
              <Register regVisible={this.state.regVisible} handleCancel={this.handleRegCancel}></Register>
            </div>
          </div>
        </header>
      </Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
      loginStatus: state.userReducers.loginStatus
  }
}
 
export default connect(mapStateToProps, null)(Header)