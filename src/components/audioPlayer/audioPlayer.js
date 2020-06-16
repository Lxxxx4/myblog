import React, { Component } from 'react'
import styles from './audioPlayer.module.scss'
import { Progress } from 'antd'

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      play: false,
      timer: null,
      duration: 0,
      currentTime: 0
    }
  }
  componentDidMount() {
    let that = this
    let audio = that.refs.audio
    audio.addEventListener('canplay', function() {
      that.setState({
        duration: parseInt(audio.duration)
      })
    })
    audio.onended = function() {
      clearInterval(that.state.timer)
      that.setState({
        currentTime: 0,
        play: false
      })
    };
  }
  play = () => {
    let that = this
    let status = that.state.play
    let audio = that.refs.audio
    let playBtn = that.refs['play-btn']
    that.setState({
      play: !status,
    })
    if (!status) {
      audio.play()
      playBtn.style['animation-play-state'] = 'running'
      let timer = setInterval(function(){
        let duration = that.state.duration
        let currentTime = that.state.currentTime
        if (currentTime > duration - 1){
         clearInterval(that.state.timer)
        } else {
          that.setState({
            currentTime: ++currentTime,
          })
        }
      }, 1000)
      that.setState({
        timer: timer
      })
    } else {
      audio.pause()
      playBtn.style['animation-play-state'] = 'paused'
      clearInterval(this.state.timer)
    }
  }
  showControll = () => {
    let controll = this.refs.controll
    controll.hidden = ''
  }
  hiddenControll = () => {
    let controll = this.refs.controll
    controll.hidden = 'hidden'
  }
  render() { 
    const play = this.state.play
    const currentTime = `${parseInt(this.state.currentTime / 60)}:${parseInt(this.state.currentTime % 60)}`
    const duration = `${parseInt(this.state.duration / 60)}:${parseInt(this.state.duration % 60)}`
    const percent = (this.state.currentTime / this.state.duration) * 100
    return ( 
      <div onMouseEnter={this.showControll} onMouseLeave={this.hiddenControll} className={styles['audio-wrap']}>
        <div onClick={this.play} className={styles['audio-cover']}>
          <img src="http://p1.music.126.net/3nwirRKGFTY-FRIQNBsYsw==/109951164845350672.jpg?param=140y140" alt=""></img>
           <i ref='play-btn' className={[styles['play-btn'], 'iconfont',  play? 'icon-zanting': 'icon-play'].join(' ')}></i>
          <audio ref='audio' src={this.props.musicUrl} hidden controls="controls"></audio>
        </div>
        <div  hidden='hidden' ref='controll'  className={styles['audio-controll']}>
          <div className={styles['audio-operation']}>
            <i className={['iconfont', 'icon-play', styles['prev-btn']].join(' ')}></i>
            <i onClick={this.play} className={['iconfont', play? 'icon-zanting': 'icon-play', styles['play-btn']].join(' ')}></i>
            <i className={['iconfont', 'icon-play', styles['next-btn']].join(' ')}></i>
            <span className={styles['music-name']}>{this.props.musicName}</span>
            <span className={styles['music-author']}>{this.props.author}</span>
          </div>
          <div>
            <div className={styles['music-progress']}>
              <span className={styles['music-currentTime']}>{`${currentTime}`}</span>
              <Progress percent={percent} showInfo={false} />
              <span className={styles['music-duration']}>{`${duration}`}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default AudioPlayer