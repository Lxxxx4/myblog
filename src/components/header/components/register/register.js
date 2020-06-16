import styles  from './register.module.scss'
import React, { Component, Fragment } from 'react'
import { Modal, Form, Input, Button, message  } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { register } from '@/api/userApi'


class Register extends Component {
  
  state = { 
    
  }
  regHandle = (e) => {
    e.preventDefault()
    const phone = this.refs['phone'].props.value
    const password = this.refs['password'].props.value
    const passwordConfirm = this.refs['passwordConfirm'].props.value
    if (password !== passwordConfirm) {
      message.warn({
        content: '两次密码输入不一致',
      })
      return 
    }
    let formData = {
      'phone': phone ,
      'password': password
    }
    register(formData).then(res => {
      if (res.code === 0) {
        message.success({
          content: '注册成功'
        })
        this.props.handleCancel()
      } else {
        message.warn({
          content: res.msg
        })
      }
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Modal
          title="注册"
          visible={this.props.regVisible}
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
            <Form.Item
              name="passwordConfirm"
              rules={[{ required: true, message: 'Please input your password again!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password Confirm"
                ref="passwordConfirm"
              />
            </Form.Item>
          </Form>
          <Form.Item
          >
            <Button type="primary" htmlType="submit" className={styles['reg-form-button']} onClick={this.regHandle}>
              注册
            </Button>
          </Form.Item>
        </Modal>
      </Fragment>
     )
  }
}

export default Register