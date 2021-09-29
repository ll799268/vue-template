/**
 * 输入一个值，返回其数据类型
 * @param {*} para 数据类型
 * @return {String} 类型
 */
export const type = para => Object.prototype.toString.call(para)

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
 * 严格的身份证校验
 * @param {Number} sId 身份证号
 */
export const isCardID = sId => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.error('你输入的身份证长度或格式错误')
     false
  }

  // 身份证城市
  const aCity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.error('你的身份证地区非法')
    return false
  }

  // 出生日期验证
  const sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/'),
    d = new Date(sBirthday);
  if (sBirthday != (d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())) {
    console.error('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  let sum = 0;
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432'

  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i]
  }

  const last = codes[sum % 11] // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.error('你输入的身份证号非法')
    return false
  }

  return true
}

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
 * 判断手机运营商
 * @param {String} number 手机号
 */
export const isMobileNumber = number => {
  const i =
    '134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178',
    n = '130,131,132,155,156,185,186,145,176',
    a = '133,153,180,181,189,177,173,170';

  let o = number || '',
    r = o.substring(0, 3),
    d = o.substring(0, 4),
    s =
      !!/^1\d{10}$/.test(o) &&
      (n.indexOf(r) >= 0
        ? '联通'
        : a.indexOf(r) >= 0
          ? '电信'
          : '1349' == d
            ? '电信'
            : i.indexOf(r) >= 0
              ? '移动'
              : '未知');
  return s
}