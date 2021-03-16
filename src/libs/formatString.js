/**
 * 字符转换
 * @param {String} str
 * @param {Number} type 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 */
export const changeCase = (str, type) => {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, word => {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2:
      return str.replace(/\b\w+\b/g, word => {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3:
      return str.split('').map(word => {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase()
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

/**
 * 在字符串中插入新字符串
 * @param {*} soure 原字符串
 * @param {*} index 下标位置
 * @param {*} newStr 要插入的字符串
 */
export const insertStr = (soure, index, newStr) => soure.slice(0, index) + newStr + soure.slice(index)

/**
 * 字符串中提取数字(不包含小数点)
 * @param {String} string 要截取的字符串
 * @returns {Number} 提取的数字
 */
export const formatChooseNumber = string => string.replace(/[^0-9]/g, '')

/**
 * 校验字符的长度是否在规定的范围内
 * @param {String} string 校验字符
 * @param {String} minInt 为在取值范围中最小的长度
 * @param {String} maxInt 为在取值范围中最大的长度
 */
export const lengthRange = (string, minLength, maxLength) => Boolean(string.length >= minLength && string.length <= maxLength)

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
 * 清除所有空格
 * @param {String} string 要清除的字符串
 */
export const clearSpaces = string => string.replace(/[\u4e00-\u9fa5]/g, '')

/**
 * 清除所有中文字符(包括中文标点符号)
 * @param {String} string 要清除的字符串
 */
export const clearCNChars = string => string.replace(/[\u4e00-\u9fa5]/g, '')

/**
 * 全角半角转换
 * @param {String} sStr  要转换的字符串
 * @param {Number} iCase 0全到半，1半到全，其他不转化
 */
export const chgCase = (sStr, iCase) => {
  if (
    typeof sStr != 'string' ||
    sStr.length <= 0 ||
    !(iCase === 0 || iCase == 1)
  ) {
    return sStr
  }
  let i,
    oRs = [],
    iCode;
  if (iCase) {
    // 半 -> 全
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i)
      if (iCode == 32) {
        iCode = 12288
      } else if (iCode < 127) {
        iCode += 65248
      }
      oRs.push(String.fromCharCode(iCode))
    }
  } else {
    // 全 -> 半
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i)
      if (iCode == 12288) {
        iCode = 32
      } else if (iCode > 65280 && iCode < 65375) {
        iCode -= 65248
      }
      oRs.push(String.fromCharCode(iCode))
    }
  }
  return oRs.join('')
}

/**
 * 判断字符串出现最多的字符，并统计次数
 */
export const countStr = str => {
  let obj = {}
  for (let i = 0, l = str.length, k; i < l; i++) {
    k = str.charAt(i)
    if (obj[k]) {
      obj[k]++
    } else {
      obj[k] = 1
    }
  }
  let m = 0,
    i = null;
  for (let k in obj) {
    if (obj[k] > m) {
      m = obj[k]
      i = k
    }
  }
  return i + ':' + m
}

/**
 * 检测密码强度
 * @param {Number} 
 */
export const checkPwd = str => {
  let Lv = 0;
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv
}