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
 * 随机生成十六进制颜色代码
 * @returns 
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}

/**
 * 页面插入多条数据
 * @param {Element} parentDom 要插入的父节点
 * @param {Number} onceNumber 一次插入几条数据
 */
export const insertManyRecord = (parentDom, onceNumber = 20) => {
  setTimeout(() => {
    // 插入十万条数据
    const total = 100000
    // 插入数据需要的次数
    const loopCount = Math.ceil(total / onceNumber)
    let countOfRender = 0
    // 添加数据的方法
    function add() {
      const fragment = document.createDocumentFragment()
      for (let i = 0; i < onceNumber; i++) {
        const li = document.createElement('li')
        li.innerText = Math.floor(Math.random() * total)
        fragment.appendChild(li)
      }
      parentDom.appendChild(fragment)
      countOfRender += 1
      loop()
    }
    function loop() {
      if (countOfRender < loopCount) {
        window.requestAnimationFrame(add)
      }
    }
    loop()
  }, 0)
}

/**
 * 模拟延迟
 * @param {*} timeout 
 * @returns 
 */
export const delay = timeout => {
  return new Promise(
    resolve => {
      const timeoutHandle =
        setTimeout(() => {
          clearTimeout(timeoutHandle)
          resolve()
        }, timeout)
    })
}