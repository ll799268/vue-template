/**
 * 将阿拉伯数字翻译成中文的大写数字
 * @param {Number} num 
 * @return {String}
 */
export const numberToChinese = num => {
  if (typeof num !== 'number') return ''
  const AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'),
    BB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
  let a = ('' + num).replace(/(^0*)/g, '').split('.'),
    k = 0,
    re = '';
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}// d{' + (a[0].length - i - 1) + '}$')
          .test(a[0]))
          re = BB[4] + re
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re
    if (a[0].charAt(i) != 0)
      re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }

  if (a.length > 1) //  加上小数部分(如果有小数部分)
  {
    re += BB[6]
    for (let i = 0; i < a[1].length; i++)
      re += AA[a[1].charAt(i)]
  }
  if (re == '一十')
    re = '十'
  if (re.match(/^一/) && re.length == 3)
    re = re.replace('一', '')
  return re
}

/**
 * 将数字转换为大写金额
 * @param {Number} Num 
 * @return {String}
 */
export const changeToChinese = Num => {
  // 判断如果传递进来的不是字符的话转换为字符
  if (typeof Num === 'number') {
    Num = new String(Num)
  }

  Num = Num.replace(/,/g, '') // 替换tomoney()中的“,”
  Num = Num.replace(/ /g, '') // 替换tomoney()中的空格
  Num = Num.replace(/￥/g, '') // 替换掉可能出现的￥字符
  if (isNaN(Num)) { // 验证输入的字符是否为数字
    console.error('请检查小写金额是否正确')
    return false
  }

  // 字符处理完毕后开始转换，采用前后两部分分别转换
  const part = String(Num).split('.');
  let newchar = '';

  // 小数点前进行转化
  for (let i = part[0].length - 1; i >= 0; i--) {
    // 若数量超过拾亿单位，提示
    if (part[0].length > 10) {
      console.error('请检查数量超过拾亿单位，提示')
      return 'max'
    }
    let tmpnewchar = ''
    let perchar = part[0].charAt(i)
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar
        break
      case '1':
        tmpnewchar = '壹' + tmpnewchar
        break
      case '2':
        tmpnewchar = '贰' + tmpnewchar
        break
      case '3':
        tmpnewchar = '叁' + tmpnewchar
        break
      case '4':
        tmpnewchar = '肆' + tmpnewchar
        break
      case '5':
        tmpnewchar = '伍' + tmpnewchar
        break
      case '6':
        tmpnewchar = '陆' + tmpnewchar
        break
      case '7':
        tmpnewchar = '柒' + tmpnewchar
        break
      case '8':
        tmpnewchar = '捌' + tmpnewchar
        break
      case '9':
        tmpnewchar = '玖' + tmpnewchar
        break
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元'
        break
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾'
        break
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰'
        break
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟'
        break
      case 4:
        tmpnewchar = tmpnewchar + '万'
        break
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾'
        break
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰'
        break
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟'
        break
      case 8:
        tmpnewchar = tmpnewchar + '亿'
        break
      case 9:
        tmpnewchar = tmpnewchar + '拾'
        break
    }

    newchar = tmpnewchar + newchar
  }

  // 小数点之后进行转化
  if (Num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      //  alert('小数点之后只能保留两位,系统将自动截断')
      part[1] = part[1].substr(0, 2)
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = ''
      perchar = part[1].charAt(i)
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar
          break
        case '1':
          tmpnewchar = '壹' + tmpnewchar
          break
        case '2':
          tmpnewchar = '贰' + tmpnewchar
          break
        case '3':
          tmpnewchar = '叁' + tmpnewchar
          break
        case '4':
          tmpnewchar = '肆' + tmpnewchar
          break
        case '5':
          tmpnewchar = '伍' + tmpnewchar
          break
        case '6':
          tmpnewchar = '陆' + tmpnewchar
          break
        case '7':
          tmpnewchar = '柒' + tmpnewchar
          break
        case '8':
          tmpnewchar = '捌' + tmpnewchar
          break
        case '9':
          tmpnewchar = '玖' + tmpnewchar
          break
      }
      if (i == 0) tmpnewchar = tmpnewchar + '角'
      if (i == 1) tmpnewchar = tmpnewchar + '分'
      newchar = newchar + tmpnewchar
    }
  }
  // 替换所有无用汉字
  while (newchar.search('零零') != -1) {
    newchar = newchar.replace('零零', '零')
    newchar = newchar.replace('零亿', '亿')
    newchar = newchar.replace('亿万', '亿')
    newchar = newchar.replace('零万', '万')
    newchar = newchar.replace('零元', '元')
    newchar = newchar.replace('零角', '')
    newchar = newchar.replace('零分', '')
  }
  if (newchar.charAt(newchar.length - 1) == '元') {
    newchar = newchar + '整'
  }
  return newchar
}

/**
 * 随机数范围
 * @param {Number} min 最小数值
 * @param {Number} max 最大数值
 */
export const random = (min, max) => {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null
  }
}

/**
 * 金额千分位分隔(保留两位小数)
 * @param {Number} num 
 */
export const thousandthsSlice = num => {
  if (/[^0-9\.]/.test(num)) return 'invalid value'
  num = num.replace(/^(\d*)$/, '$1.')
  num = (num + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  num = num.replace('.', ',')
  const re = /(\d)(\d{3},)/;
  while (re.test(num))
    num = num.replace(re, '$1,$2')
  num = num.replace(/,(\d\d)$/, '.$1')
  return '￥' + num.replace(/^\./, '0.')
}

/**
 * 将数字转换为进制数
 * @param {Number} num 
 * @param {Number} HEXNumber 
 * @returns 
 */
export const numToHEX = (num, HEXNumber) => num.toString(HEXNumber)

/**
 * 非零开头的整数
 * @param {Number} num 
 * @returns 
 */
export const isInt = num => {
  return /^[1-9][0-9]$/.test(num)
}

/**
 * 非零开头的两位小数
 * @param {Number} num 
 * @returns 
 */
export const isDouble = num => {
  return /^(([^0][0-9]+|0)\.([0-9]{1,2})$)|^([^0][0-9]+|0)$/.test(num)
}