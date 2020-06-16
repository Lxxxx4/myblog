import styles from './style.module.scss'
import React, { Component, Fragment } from 'react'
import w3cschool from '@/assets/icon/w3cschool.ico'
import gold from '@/assets/icon/gold.png'
import csdn from '@/assets/icon/csdn.ico'
import oschina from '@/assets/icon/oschina.ico'
import cnblogs from '@/assets/icon/cnblogs.png'
import v2ex from '@/assets/icon/v2ex.png'
import react from '@/assets/icon/react.png'
import vue from '@/assets/icon/vue.png'
import codepen from '@/assets/icon/codepen.ico'
import typescript from '@/assets/icon/typescript.png'
import segmentfault from '@/assets/icon/segmentfault.png'
import github from '@/assets/icon/github.ico'
import w3school from '@/assets/icon/w3school.png'
import jb from '@/assets/icon/jb51.ico'
import antd from '@/assets/icon/ant-design.png'
import sass from '@/assets/icon/sass.png'
import iconfont from '@/assets/icon/iconfont.ico'
import ElmentUi from '@/assets/icon/element-ui.ico'

class Community extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      communityList: [
        {
          name: '掘金',
          addr: 'https://juejin.im/timeline',
          icon: gold
        },{
          name: 'w3c',
          addr: 'https://www.w3cschool.cn/',
          icon: w3cschool
        },{
          name: 'csdn',
          addr: 'https://www.csdn.net/',
          icon: csdn
        },{
          name: 'oschina',
          addr: 'https://www.oschina.net/',
          icon: oschina
        },{
          name: '博客园',
          addr: 'https://home.cnblogs.com/',
          icon: cnblogs
        },{
          name: 'V2EX',
          addr: 'https://www.v2ex.com/',
          icon: v2ex
        },{
          name: 'react',
          addr: 'https://react.docschina.org/',
          icon: react
        },{
          name: 'vue',
          addr: 'https://cn.vuejs.org/',
          icon: vue
        },{
          name: 'CodePen',
          addr: 'https://codepen.io/',
          icon: codepen
        },{
          name: 'TypeScript',
          addr: 'https://www.tslang.cn/',
          icon: typescript
        },{
          name: '思否',
          addr: 'https://segmentfault.com/',
          icon: segmentfault
        },{
          name: 'Github',
          addr: 'https://github.com/',
          icon: github
        },{
          name: 'w3school',
          addr: 'https://www.w3school.com.cn/',
          icon: w3school
        },{
          name: '脚本之家',
          addr: 'https://www.jb51.net/',
          icon: jb
        },{
          name: 'antd',
          addr: 'https://ant.design/index-cn',
          icon: antd
        },{
          name: 'sass',
          addr: 'https://sass.bootcss.com/',
          icon: sass
        },{
          name: 'iconfont',
          addr: 'https://www.iconfont.cn/',
          icon: iconfont
        },{
          name: 'ElmentUi',
          addr: 'https://element.eleme.cn/#/zh-CN',
          icon: ElmentUi
        }
      ]
     }
  }
  render() { 
    return ( 
      <Fragment>
        <div className={styles['community-wrap']}>
          <ul className={styles['community-list']}>
            {
              this.state.communityList.map( (item, index) => {
                return (
                  <li  key={index}>
                    <img className={styles.icon} src={item.icon} alt=''></img>
                    <span>{item.name}</span>
                  </li>
                )
              })              
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}
 
export default Community