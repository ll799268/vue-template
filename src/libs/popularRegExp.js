/**
 * 校验字符是否以字母开头
 * @param {String} string  校验字符
 */
export const letterBegin = string => /^[A-z]/.test(string)

/**
* 校验字符是否为纯数字(整数) 字符全部为正整数(包含0)
* @param {String} string  校验字符
*/
export const pureNum = string => /^[0-9]*$/.test(string)

/**
 * 判断是否金额
 * @param {String} str 
 */
export const checkMoney = str => /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(str)

/**
 * 校验是否为中国大陆第二代居民身份证
 * @param {String} string 校验中国大陆第二代居民身份证
 * @return {Boolean} result
 */
export const isIDCard = string => /^[1-9][0-9]{5}(18|19|(2[0-9]))[0-9]{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)[0-9]{3}[0-9Xx]$/.test(string)


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
 * 判断是否是邮箱地址
 * @param {String} email 校验邮箱地址
 * @return {Boolean} result
 */
export const checkEmail = email => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(email)

/**
 * 校验是否为中国大陆邮政编码
 * @param {String} string 校验中国大陆邮政编码
 */
export const isPostCode = string => /^[1-9][0-9]{5}$/.test(string.toString())

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} phone 校验手机号
 */
export const checkTelphone = phone => /^((\+|00)86)?1[3-9]\d{9}$/g.test(phone)

/**
 * 校验是否为中国大陆传真或固定电话号码
 * @param {String} telPhone 校验传真或固定电话号码
 */
export const isTel = telPhone => /^([0-9]{3,4})?[0-9]{7,8}$|^([0-9]{3,4}-)?[0-9]{7,8}$/.test(telPhone)

/**
 * 校验是否为QQ号码(非0开头的5位-13位整数)
 * @param {String} value 校验QQ号码
 */
export const isQQ = value => /^[1-9][0-9]{4,12}$/.test(value.toString())

/**
 * 校验是否为WX号码(6至20位，以字母开头，字母，数字，减号，下划线)
 * @param {String} value 校验WX号码
 */
export const isWX = value => /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value.toString())

/**
 * 校验是否为网址
 * 
  以https://、http://、ftp://、rtsp://、mms://开头、或者没有这些开头
  可以没有www开头(或其他二级域名)，仅域名
  网页地址中允许出现/%*?@&等其他允许的符号
 * @param {String} string
 */
export const isURL = string => /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(string)

/**
 * 校验是否为不含端口号的IP地址
 * 
  IP格式为xxx.xxx.xxx.xxx，每一项数字取值范围为0-255
  除0以外其他数字不能以0开头，比如02
 * @param {String} string
 */
export const isIP = string => /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(string)

/**
 * 检查文件类型是否图片
 * @param {String} flieName 
 * @returns 
 */
export const checkIsPic = flieName => {
  return /\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(flieName)
}

/**
 * 检查只含字母的字符串
 * @param {*} string 
 * @returns 
 */
export const checkLetter = string => /^[a-zA-Z]+$/.test(string)

/**
 * 检查只含中文的字符串
 * @param {*} string 
 * @returns 
 */
export const checkCN = string => /[\u4E00-\u9FA5]/.test(string)

/**
 * 车牌号的校验
 * @param {*} string 
 * @returns 
 */
export const checkCarNo = string => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(string)

/**
 * 火车车次
 * @param {*} string 
 * @returns 
 */
export const checkTrainNo = string => /^[GCDZTSPKXLY1-9]\d{1,4}$/.test(string)

/**
 * 视频链接地址
 * @param {*} string 
 * @returns 
 */ 
export const checkVideoLink = string => /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i.test(string)

/**
 * 图片链接地址
 * @param {*} string
 * @returns 
 */ 
export const checkImageLink = string => /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i.test(string)

/**
 * 12小时制时间
 * @param {*} string (HH:mm:ss)
 * @returns 
 */ 
export const check12HourSystem = string => /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/.test(string)

/**
 * 24小时制时间
 * @param {*} string (HH:mm:ss)
 * @returns 
 */ 
export const check24HourSystem = string => /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(string)

/**
 * 密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
 * @param {*} string 
 * @returns 
 */
export const checkCN = string => /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/.test(string)

/**
 * 文件拓展名校验
 * @param {*} arr 要校验文件的后缀名
 * @returns 
 */
export const checkFileName = arr => {
  arr = arr.map(name => `.${name}`).join('|')
  return new RegExp(`(${arr})$`)
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
  return s
}
