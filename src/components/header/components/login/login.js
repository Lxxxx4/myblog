import styles  from './login.module.scss'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input, Button, message  } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/api/userApi'
import { editLoginStatus } from '@/store/actions/userActions'

class Login extends Component {
  
  state = { 
    
  }
  // 登录
  loginHandle = (e) => {
    e.preventDefault()
    let formData = {
      'phone': this.refs['phone'].props.value,
      'password': this.refs['password'].props.value
    }
    login(formData).then(res => {
      if (res.code === 0) {
        let token = res.data.token
        localStorage.token = token
        message.success({
          content: '登陆成功',
        })
        this.props.loginStatus(true)
        this.props.handleCancel()
      } else {
        message.warn({
          content: res.msg + ',请检查手机和密码',
        })
      }
    })
  }
  
  render() { 
    return ( 
      <Fragment>
        <Modal
          title="登录"
          visible={this.props.loginVisible}
          width={400}
          footer={null}
          centered={true}
          onCancel={this.props.handleCancel}
        >
          <Form
            onSubmit={this.login}
            labelCol={{span: 5,}}
            labelAlign="left"
          >
            <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}
              >
                <Input 
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Phone" 
                  ref="phone"
                />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                ref="password"
              />
            </Form.Item>
          </Form>
          <Form.Item
          >
            <Button type="primary" htmlType="submit" className={styles['login-form-button']} onClick={this.loginHandle}>
              登录
            </Button>
          </Form.Item>
        </Modal>
      </Fragment>
     )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginStatus: (status) => dispatch(editLoginStatus(status))
  }
}

export default connect(null ,mapDispatchToProps)(Login)