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

/**
 * el是否在视口范围内
 * @param {Document} el 元素节点
 * @param {Boolean} partiallyVisible 包含上下
 */
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect(),
        { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

/**
 * 找元素的第n级父元素
 * @param {Document} ele 本身元素
 * @param {Number} n 第n级别
 */
export const parents = (el, n) => {
  while (el && n) {
    el = el.parentElement ? el.parentElement : el.parentNode
    n--
  }
  return el
}

/**
 * 返回元素的第n个兄弟节点
 * @param {Document} el 本身元素
 * @param {Number} n 第n个
 */
export const retSibling = (el, n) => {
  while (el && n) {
    if (n > 0) {
      if (el.nextElementSibling) {
        el = el.nextElementSibling
      } else {
        for (el = e.nextSibling; el && el.nodeType !== 1; el = el.nextSibling);
      }
      n--
    } else {
      if (el.previousElementSibling) {
        el = el.previousElementSibling
      } else {
        for (el = el.previousElementSibling; el && el.nodeType !== 1; el = el.previousElementSibling);
      }
      n++
    }
  }
  return el
}

/**
 * 判断元素有没有子元素
 * @param {Element} el 
 */
export const hasChildren = el => {
  const children = el.childNodes,
    len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true
    }
  }
  return false
}

/**
 * 检查父元素是否包含子元素
 * @param {*} parent 
 * @param {*} child 
 * @returns 
 */
 export const elementContains = (parent, child) => parent !== child && parent.contains(child)


/**
 * 返回DOM元素节点对应的属性值
 * @param {Element} el 
 * @param {*} ruleName 
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName]

/**
 * 给定的DOM节点前插入新的节点内容
 * @param {Element} el 
 * @param {String} htmlString html片段
 */
export const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString)

/**
 * 给定的DOM节点后插入新的节点内容
 * @param {Element} el 
 * @param {String} htmlString html片段
 */
export const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString)
