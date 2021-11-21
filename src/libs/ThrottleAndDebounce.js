/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 * @param {*} leading 指定调用在节流开始前
 * @returns 
 */
export const throttle = (func, delay = 0, leading = true) => {
  // ways1 相差时间戳比较
  // let timer = null,
  //   last // 上一次执行时间
  // return function () {
  //   const now = Date.now() // 现在的时间
  //   if (last && now < last + delay) {
  //     if (leading) return
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //       last = now
  //       func.apply(this, arguments)
  //     }, delay)
  //   } else {
  //     last = now
  //     func.apply(this, arguments)
  //   }
  // }

  // ways2 是否存在定时器比较
  let timer = null
  return function () {
    if (leading) {
      func.apply(this, arguments)
      leading = false
    }
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        if (!leading) {
          timer = null
          leading = false
        }
      }, delay)
    }
  }
}

/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = (fn, wait) => {
  let timeout = null
  return function () {
    if (!timeout) return clearTimeout(timeout) // 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}