/**
 * 输入一个值，返回其数据类型
 * @param {*} para 数据类型
 * @return {String} 字符串类型
 */
export const type = para => {
  return Object.prototype.toString.call(para)
}

/**
 * 判断类型集合
 * @param {*} str 判断的字符
 * @param {String} type 类型
 */
export const checkStr = (str, type) => {
  switch (type) {
    case 'phone':   // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel':     // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card':    // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd':     // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal':  // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ':      // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email':   // 邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money':   // 金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL':     // 网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP':      // IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date':    // 日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number':  // 数字
      return /^[0-9]$/.test(str);
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': // 中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case 'lower':   // 小写
      return /^[a-z]+$/.test(str);
    case 'upper':   // 大写
      return /^[A-Z]+$/.test(str);
    case 'HTML':    // HTML标记
      return /<('[^']*'|'[^']*'|[^''>])*>/.test(str);
    default:
      return false;
  }
}

/**
 * 严格的身份证校验
 * @param {Number} sId 身份证号
 */
export const isCardID = sId => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.error('你输入的身份证长度或格式错误')
    return false
  }
  
  // 身份证城市
  const aCity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.error('你的身份证地区非法')
    return false
  }

  // 出生日期验证
  const sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/'),
    d = new Date(sBirthday)
  if (sBirthday != (d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())) {
    console.error('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  let sum = 0;
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432'

  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  
  const last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.error('你输入的身份证号非法')
    return false
  }

  return true
}

/**
 * 校验是否为中国大陆第二代居民身份证
 * @param {String} string 校验中国大陆第二代居民身份证
 * @return {Boolean} result
 */
export const isIDCard = string => {
  return /^[1-9][0-9]{5}(18|19|(2[0-9]))[0-9]{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)[0-9]{3}[0-9Xx]$/.test(string);
}

/**
 * 判断是否是邮箱地址
 * @param {String} email 校验邮箱地址
 * @return {Boolean} result
 */
export const checkEmail = email => {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(email)
}

/**
 * 校验是否为中国大陆邮政编码
 * @param {String} string 校验中国大陆邮政编码
 */
export const isPostCode = string => {
  return /^[1-9][0-9]{5}$/.test(string.toString());
}

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} phone 校验手机号
 */
export const checkTelphone = phone => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
  if (reg.test(phone)) return true
}

/**
 * 校验是否为中国大陆传真或固定电话号码
 * @param {String} telPhone 校验传真或固定电话号码
 */
export const isTel = telPhone => {
  return /^([0-9]{3,4})?[0-9]{7,8}$|^([0-9]{3,4}-)?[0-9]{7,8}$/.test(telPhone);
}

/**
 * 校验是否为QQ号码(非0开头的5位-13位整数)
 * @param {String} value 校验QQ号码
 */
export const isQQ = value => {
  return /^[1-9][0-9]{4,12}$/.test(value.toString());
}

/**
 * 是否字符串
 * @param {*} 
 */
export const isString = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

/**
 * 是否数字
 * @param {*} 
 */
export const isNumber = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/**
 * 是否boolean
 * @param {*} 
 */
export const isBoolean = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 是否函数
 * @param {*} 
 */
export const isFunction = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 是否为null
 * @param {*} 
 */
export const isNull = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * 是否为undefined
 * @param {*} 
 */
export const isUndefined = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * 是否对象
 * @param {*} 
 */
export const isObj = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/**
 * 是否数组
 * @param {*} 
 */
export const isArray = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * 是否时间
 * @param {*} 
 */
export const isDate = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * 是否正则
 * @param {*} 
 */
export const isRegExp = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 是否错误对象
 * @param {*} 
 */
export const isError = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * 是否Symbol函数
 * @param {*} 
 */
export const isSymbol = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * 是否Promise对象
 * @param {*} 
 */
export const isPromise = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * 是否Set对象
 * @param {*} 
 */
export const isSet = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

/**
 * 校验是否为网址
 * 
  以https://、http://、ftp://、rtsp://、mms://开头、或者没有这些开头
  可以没有www开头(或其他二级域名)，仅域名
  网页地址中允许出现/%*?@&等其他允许的符号
 * @param {String} string
 */
export const isURL = string => {
  return /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(string);
}

/**
 * 校验是否为不含端口号的IP地址
 * 
  IP格式为xxx.xxx.xxx.xxx，每一项数字取值范围为0-255
  除0以外其他数字不能以0开头，比如02
 * @param {String} string
 */
export const isIP = string => {
  return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(string);
}

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
  return s;
}