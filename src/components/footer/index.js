import React, { Component } from 'react'
import styles from './style.module.scss'
import weixin from '@/assets/img/weixin.jpg'

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <footer className={styles['footer-wrap']}>
        <div className={styles['footer-content']}>
          <div className={styles['contact-me']}>
            <img src={weixin} alt=''></img>
            <div>我的微信</div>
          </div>
          <div className={styles['statement']}>
            <h3>站点声明：</h3>
            <p>1、本站收录的网址若侵害到您的利益，请联系我们删除处理，邮箱18069941158@163.com</p>
            <p>2、所有文章、个人博客模板未经授权禁止转载、摘编、复制或建立镜像。</p>
            <p>Copyright © www.Lxxxx4.com  All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer