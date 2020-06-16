import { postBybody } from '../request/request'
export const login = (params) => postBybody('/user/login', params, {headers: {'Content-Type': 'application/json; charset=utf-8'}})

export const register = (params) => postBybody('/user/reg', params, {headers: {'Content-Type': 'application/json; charset=utf-8'}})
