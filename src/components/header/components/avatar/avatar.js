import React, { Component } from 'react'
import { Popover, Avatar } from 'antd'
import { UserOutlined, CaretDownFilled } from '@ant-design/icons'
import styles from './avatar.module.scss'
import { connect } from 'react-redux'
import { editLoginStatus } from '@/store/actions/userActions'


class AvatarComp extends Component {
  state = {  }
  loginOut = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.loginStatus(false)
  }
  render() { 
    const content = (
      <ul>
        <li>
          <div role='button' onClick={this.loginOut}>退出</div>
        </li>
      </ul>
    )
    return ( 
      <Popover autoAdjustOverflow={true} overlayClassName={styles.popover} content={content} >
        <div className={styles['avatar-wrap']}>
          <Avatar size={30} icon={<UserOutlined />} />
          <span className={styles.username}>linx</span>
          <CaretDownFilled />
        </div>
      </Popover>
     )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginStatus: (status) => dispatch(editLoginStatus(status))
  }
}
 
export default connect(null, mapDispatchToProps)(AvatarComp)