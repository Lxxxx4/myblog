import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {  message  } from 'antd'
import * as serviceWorker from './serviceWorker'
import store from '@/store'
import { Provider } from 'react-redux'

// message全局配置
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
  rtl: true
})
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
