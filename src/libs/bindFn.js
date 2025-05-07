/**
 * 绑定事件的兼容代码
 * @param {Document} el 绑定事件的dom
 * @param {Event} evt 事件类型
 * @param {Function} handle fn事件
 */
export const addEvent = (el, evt, handle) => {
  if (el.addEventListener) { // 非ie和非ie9
    el.addEventListener(evt, handle, false)
  } else if (el.attachEvent) { // ie6到ie8
    el.attachEvent('on' + evt, () => {
      handle.call(el)
    })
  } else {
    el['on' + evt] = handle
  }
}

/**
 * 取消冒泡的兼容代码
 */
export const stopBubble = e => {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true
  }
}

/**
 * 阻止默认行为的兼容代码
 */
export const preventDefault = e => {
  if (e & e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false
  }
}

/**
 * requestAnimFrame兼容性方法
 */
export const requestAnimFrame = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
})()