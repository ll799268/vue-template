/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @returns {年月日}
 */
export const formatTime = (times, ymd, hms) => {
  const oDate = new Date(times),
   oYear = oDate.getFullYear()

  let oMonth = oDate.getMonth() + 1,
   oDay = oDate.getDate(),
   oHour = oDate.getHours(),
   oMin = oDate.getMinutes(),
   oSec = oDate.getSeconds(),
   oTime = '' // 最后拼接时间

  // 比较时分秒是否小于十
  if (oHour < 10) oHour = '0' + oHour
  if (oMin < 10) oMin = '0' + oMin
  if (oSec < 10) oSec = '0' + oSec

  // 比较日期是否小于十
  if (oMonth < 10) oMonth = '0' + oMonth
  if (oDay < 10) oDay = '0' + oDay

  // 年月日格式
  switch (ymd) {
    case 'yyyy-mm-dd':
      oTime = oYear + '-' + oMonth + '-' + oDay + ' '
      break
    case 'yyyy/mm/dd':
      oTime = oYear + '/' + oMonth + '/' + oDay + ' '
      break
    case 'yyyy年mm月dd日':
      oTime = oYear + '年' + oMonth + '月' + oDay + '日 '
      break
    default:
      break
  }
  // 时分秒格式
  switch (hms) {
    case 'hh':
      oTime = oTime + oHour
      break
    case 'hh:mm':
      oTime = oTime + oHour + ':' + oMin
      break
    case 'hh:mm:ss':
      oTime = oTime + oHour + ':' + oMin + ':' + oSec
      break
  }
  return oTime
}




/**
 * 判断是否是邮箱地址
 * @param {String} email
 */
export const checkEmail = email => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
  if (reg.test(email)) return true
}

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} phone
 */
export const checkTelphone = phone => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
  if (reg.test(phone)) return true
}

/**
 * 判断是浏览器内核
 */
export const checkBrowser = () => {
  const u = navigator.userAgent
  const obj = {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent;
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
    iPad: u.indexOf("iPad") > -1, //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是否是微信,qq 或 uc
 */
export const checkWeixinQqUc = () => {
  const u = navigator.userAgent;
  const obj = {
    weixin: u.indexOf("MicroMessenger") > -1, //是否微信
    qq: u.match(/QQ/i) == "qq" && !u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 检查是否是 IphoneX
 */
export const checkIsIphoneX = () => {
  const u = navigator.userAgent;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS && screen.height >= 812) {
    return true;
  }
};

/**
 * 检查是否是 Apple设备
 */
export const isAppleDevice = () => {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
}







/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = (func, delay) => {
  let timer = null
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
          // 或者直接 func()
        timer = null
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
  return function() {
    if (!timeout) clearTimeout(timeout) // 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
        // 或者直接 fn()
      timeout = null
    }, wait)
  }
}

/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export const getQueryString = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const url = window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const r = search.match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 回到顶部动画
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

/**
 *  滚动条到指定位置动画
 */
const scrollTop = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number
    return number
  }
  const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--
        scrollTop(nowTop += everTop)
      } else {
        clearInterval(scrollTimer)
      }
  }, spacingTime)
}






/**
 * 对象深度克隆
 * @origin 原对象
 * @target 目标对象
 * @return 克隆的新对象
 */

export const deepClone = (origin, target) => {
  const tar = target || {},
   toStr = Object.prototype.toString,
   arrayType = '[object Array]'

   for (let k in origin) {
     if (origin.hasOwnProperty(k)) {
       if (typeof origin[k] === 'object' && origin[k] !== null) {
         tar[k] = toStr.call(origin[k]) === arrayType ? [] : {}
         deepClone(origin[k], tar[k])
       } else {
        tar[k] = origin[k]
       }
     }
   }
   return tar
}







/**
 * 按字母进行模糊查询
 * @arr 要转换的数组
 * @name 要排序对应的字段
 * @empty 是否清空 空项
 * @returns 按[a-z]排序后的数组
 */

export const sortArrayZhName = (arr, name, empty) => {

  const letters = "*abcdefghjklmnopqrstwxyz".split(''),
   zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('')

  let segs = [],
    curr = {}

  letters.forEach((item, i) => {
    curr = {
      letter: item,
      data: []
    };
    arr.forEach((item) => {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(item[name], "zh") <= 0) &&
        item[name].localeCompare(zh[i], "zh") === -1) {
        curr.data.push(item);
      }
    });
    if (!empty || curr.data.length) {
      segs.push(curr)
      curr.data.sort(function(a, b) {
        return a[name].localeCompare(b[name], "zh")
      })
    }
  })
  return segs
}

/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 * 多维数组扁平化
 * @param {Array} arr 
 */
export const arrDeepFlat = arr => {
  return arr.flat(Infinity) || arr.toString().split(',')
}

/**
 * 用洗牌算法随机打乱一个数组
 * @param {Array} arr 数组
 */
export const shuffle = arr => {
  let leg = arr.length;
  while (leg) {
    const i = Math.floor(Math.random() * leg--);
    [arr[leg], arr[i]] = [arr[i], arr[leg]];
  }
  return arr;
};

/**
 * 树形菜单的制作
 * @param {Array} arr 扁平化数组
 * @return 多维数组
 */
export const formatToTree = arr => {
  const parent = arr.filter(item => !item.pid),
        children = arr.filter(item => item.pid)

  return toTree(parent, children)

  function toTree (parent, children) {
    parent.map(pItem => {
      children.map((cItem, index) => {
        if (pItem.id === cItem.pid) {
          let _c = JSON.parse(JSON.stringify(children))
          _c.splice(index, 1)
          toTree([cItem], _c)
          
          if (pItem.children) {
            pItem.children.push(cItem)
          } else {
            pItem.children = [cItem]
          }
          
        }
      })
    })
    return parent
  }
}
