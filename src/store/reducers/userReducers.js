import { combineReducers } from 'redux'
import { EDIT_LOGIN_STATUS } from '@/store/actions/userActions'

const status = !!localStorage.token
function loginStatus(state = status, action) {
  switch (action.type) {
    case EDIT_LOGIN_STATUS:
      return action.status
    default:
      return state
  }
}

const userStore = combineReducers({
  loginStatus
})

export default userStore