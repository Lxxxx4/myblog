export const BLOG_LIST_CACHE = 'BLOG_LIST_CACHE'
export const SCROLL_TOP = 'SCROLL_TOP'

export function ListCache (cache) {
  return { type: BLOG_LIST_CACHE, cache}
}
export function ScrollTop (dis) {
  return { type: SCROLL_TOP, dis}
}