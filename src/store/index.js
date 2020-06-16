import { createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import userReducers from '@/store/reducers/userReducers'
import cacheReducers from '@/store/reducers/cacheReducers'


const rootStore = combineReducers({
  userReducers,
  cacheReducers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootStore, composeEnhancers())

export default store