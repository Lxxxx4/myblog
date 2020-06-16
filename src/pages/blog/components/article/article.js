import React, { Component } from 'react'
import styles from './article.module.scss'
import 'highlight.js/styles/github.css'
import marked from 'marked'
import hljs from 'highlight.js'

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
})
class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  componentDidMount() {
    this.setState({
      content: marked(this.props.location.state.content)
    })
  }
  render() { 
    return ( 
      <div className={styles['article-content']} dangerouslySetInnerHTML={{__html:marked(this.props.location.state.content)}}></div>
    )
  }
}
 
export default Article