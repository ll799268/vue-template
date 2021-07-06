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
    d = g.compatMode == 'BackCompat' ? a : g.documentElement;

  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}

/**
 * 动态引入js
 * @param {String} src 
 */
export const injectScript = src => {
  let s = document.createElement('script');
  s.type = 'text/JavaScript'
  s.async = true
  s.src = src
  const t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t)
}

/**
 * 异步加载script
 */
export const loadScript = (url, callback) => {
  let oscript = document.createElement('script');
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

/**
 * 根据url地址下载
 * @param {String} url 
 */
export const download = url => {
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
    isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  if (isChrome || isSafari) {
    let link = document.createElement('a');
    link.href = url
    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download'
  }
  window.open(url, '_self')
  return true
}

/**
 * 跳转新窗口
 * @param {*} url 链接
 * @param {*} windowName 窗口名字
 * @param {*} width 宽度
 * @param {*} height 高度
 */
export const openWindow = (url, windowName, width, height) => {
  const x = parseInt(screen.width / 2.0) - width / 2.0;
  const y = parseInt(screen.height / 2.0) - height / 2.0;
  const isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    let p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width
    p = p + ",height="
    p = p + height
    p = p + ",left="
    p = p + x
    p = p + ",top="
    p = p + y
    retval = window.open(url, windowName, p)
  } else {
    const win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
      y +
      ",left=" +
      x +
      ",scrollbars=" +
      scrollbars +
      ",dialog=yes,modal=yes,width=" +
      width +
      ",height=" +
      height +
      ",resizable=no"
    )
    eval("try { win.resizeTo(width, height); } catch(e) { }")
    win.focus()
  }
}

/**
 * 随机生成十六进制颜色代码
 * @returns 
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}
