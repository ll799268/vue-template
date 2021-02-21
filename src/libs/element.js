/**
 * el是否包含某个class
 * @param {Document} el 元素节点
 * @param {String} className 类名
 */
export const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * el添加某个class
 * @param {Document} el 元素节点
 * @param {String} className 类名
 */
export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 * el去除某个class
 * @param {Document} el 元素节点
 * @param {String} className 类名
 */
export const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}