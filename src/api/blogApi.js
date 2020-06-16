import { get } from '../request/request'

export const getBlogs = (params) => get('/blog/getBlogs', params)
