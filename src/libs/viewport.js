/**
 * 获得视口的尺寸
 */
export const getViewportOffset = () => {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

/**
 * 获取页面高度
 * @return {String} 页面高度
 */
export const getPageHeight = () => {
  const g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == 'BackCompat' ? a : g.documentElement

  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}