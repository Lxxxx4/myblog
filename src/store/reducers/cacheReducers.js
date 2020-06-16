import { combineReducers } from 'redux'
import { BLOG_LIST_CACHE, SCROLL_TOP } from '@/store/actions/cacheActions'

function listCache (state = [], action) {
  switch (action.type) {
    case BLOG_LIST_CACHE:
      return action.cache
    default:
      return state
  }
}

function scrollTop (state = 0, action) {
  switch (action.type) {
    case SCROLL_TOP:
      return action.dis
    default:
      return state
  }
}

const cacheStore = combineReducers({
  listCache,
  scrollTop
})

export default cacheStore