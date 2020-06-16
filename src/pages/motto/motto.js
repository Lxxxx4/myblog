import React, { Component } from 'react'
import styles from './motto.module.scss'
import { getMotto } from '@/api/mottoApi'

function getMottFunc (that) {
  getMotto().then(res => {
    that.setState({
      content: res.data.content
    })
  })
}
class Motto extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      content: ''
     }
  }
  componentDidMount() {
    getMottFunc(this)
  }
  refresh = e => {
    getMottFunc(this)
  }
  render() { 
    return ( 
      <div className={styles['motto-wrap']}>
        <div className={styles['motto-content']}>
           {this.state.content}
        </div>
        <div onClick={this.refresh} role='button' className={styles['refresh-btn']}>
          再来一句
        </div>
      </div>
     )
  }
}
 
export default Motto