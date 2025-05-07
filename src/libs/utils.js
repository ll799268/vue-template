/**
 * 根据url地址下载
 * @param {String} url 
 */
export const download = url => {
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
    isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
  if (isChrome || isSafari) {
    let link = document.createElement('a')
    link.href = url
    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
      link.download = fileName
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents')
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
 * 网络图片转换为base64
 * @param {*} url
 */
export const getBase64 = (url, callback) => {
  let Img = new Image(),
    dataURL = ''

  // 下面已修正ios的兼容微信打开失败的原因
  Img.setAttribute('crossOrigin', 'Anonymous') // 解决控制台跨域报错的问题
  Img.src = url + '?v=' + Math.random() // 处理缓存,fixed缓存bug,有缓存，浏览器会报错;

  Img.onload = function () { // 要先确保图片完整获取到，这是个异步事件
    let canvas = document.createElement('canvas') // 创建canvas元素
    const width = Img.width, // 确保canvas的尺寸和图片一样
      height = Img.height
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d').drawImage(Img, 0, 0, width, height) // 将图片绘制到canvas中
    dataURL = canvas.toDataURL('image/jpeg') // 转换图片为dataURL
    callback ? callback(dataURL) : null
  }
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