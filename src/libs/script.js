/**
 * 动态引入js
 * @param {String} src 
 */
export const injectScript = src => {
  const s = document.createElement('script')
  s.type = 'text/JavaScript'
  s.async = true
  s.src = src
  const t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}

/**
 * 异步加载script
 */
export const loadScript = (url, callback) => {
  const oscript = document.createElement('script')
  if (oscript.readyState) { // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
        callback()
      }
    }
  } else {
    oscript.onload = function () {
      callback()
    }
  }
  oscript.src = url
  document.body.appendChild(oscript)
}