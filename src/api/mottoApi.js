import { get } from '../request/request'

export const getMotto = (params) => get('/motto/getMotto', params)
