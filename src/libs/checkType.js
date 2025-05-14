/**
 * 判断类型集合
 * @param {*} str 判断的字符
 * @param {String} type 类型
 */
export const checkStr = (str, type) => {
  switch (type) {
    case 'phone':   // 手机号码
      return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(str)
    case 'tel':     // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card':    // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd':     // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal':  // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ':      // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email':   // 邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money':   // 金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'URL':     // 网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP':      // IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str)
    case 'date':    // 日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number':  // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str)
    case 'lower':   // 小写
      return /^[a-z]+$/.test(str)
    case 'upper':   // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML':    // HTML标记
      return /<('[^']*'|'[^']*'|[^''>])*>/.test(str)
    default:
      return false
  }
}

/**
 * 是否是爬虫
 * @returns 
 */
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(navigator.userAgent)
}

/**
 * 输入一个值，返回其数据类型
 * @param {*} para 数据类型
 * @return {String} 类型
 */
export const type = para => Object.prototype.toString.call(para)

/**
 * 是否字符串
 * @param {*} 
 */
export const isString = o => Object.prototype.toString.call(o).slice(8, -1) === 'String'

/**
 * 是否数字
 * @param {*} 
 */
export const isNumber = o => Object.prototype.toString.call(o).slice(8, -1) === 'Number'

/**
 * 是否boolean
 * @param {*} 
 */
export const isBoolean = o => Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'

/**
 * 是否函数
 * @param {*} 
 */
export const isFunction = o => Object.prototype.toString.call(o).slice(8, -1) === 'Function'

/**
 * 是否为null
 * @param {*} 
 */
export const isNull = o => Object.prototype.toString.call(o).slice(8, -1) === 'Null'

/**
 * 是否为undefined
 * @param {*} 
 */
export const isUndefined = o => Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'

/**
 * 是否对象
 * @param {*} 
 */
export const isObj = o => Object.prototype.toString.call(o).slice(8, -1) === 'Object'

/**
 * 是否数组
 * @param {*} 
 */
export const isArray = o => Object.prototype.toString.call(o).slice(8, -1) === 'Array'

/**
 * 是否时间
 * @param {*} 
 */
export const isDate = o => Object.prototype.toString.call(o).slice(8, -1) === 'Date'

/**
 * 是否正则
 * @param {*} 
 */
export const isRegExp = o => Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'

/**
 * 是否错误对象
 * @param {*} 
 */
export const isError = o => Object.prototype.toString.call(o).slice(8, -1) === 'Error'

/**
 * 是否Symbol函数
 * @param {*} 
 */
export const isSymbol = o => Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'

/**
 * 是否Promise对象
 * @param {*} 
 */
export const isPromise = o => Object.prototype.toString.call(o).slice(8, -1) === 'Promise'

/**
 * 是否Set对象
 * @param {*} 
 */
export const isSet = o => Object.prototype.toString.call(o).slice(8, -1) === 'Set'


/**
 * @description 判断字符串是否是base64
 * @param {string} str
 */
export const isBase64 = str => {
  if (str === '' || str.trim() === '') {
    return false
  }
  try {
    return btoa(atob(str)) == str
  } catch (err) {
    return false
  }
};