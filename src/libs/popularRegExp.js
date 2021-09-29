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
 * 检查用户名称是否为中、英文或者数字
 * @param {String} flieName 
 * @returns 
 */
 export const checkUname = string => {
  return /^[\u4e00-\u9fa5a-zA-Z0-9]{2,12}$/.test(string)
}

