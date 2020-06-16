import React, { Component } from 'react'
import styles from './style.module.scss'
import HotSearch from '../hotSearch'

class Slider extends Component {
  state = {  }
  render() { 
    return ( 
      <section className={styles.slider}>
        <HotSearch />
      </section>
    )
  }
}
 
export default Slider