/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @return {年月日}
 */
export const formatTime = (times, ymd, hms) => {
  const oDate = new Date(times),
    oYear = oDate.getFullYear()

  let oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSec = oDate.getSeconds(),
    oTime = ''; // 最后拼接时间

  // 比较日期是否小于十
  oMonth = ('0' + oMonth).slice(-2)
  oDay = ('0' + oDay).slice(-2)

  // 比较时分秒是否小于十
  oHour = ('0' + oHour).slice(-2)
  oMin = ('0' + oMin).slice(-2)
  oSec = ('0' + oSec).slice(-2)

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
 * 获取当日零点时间戳
 */
export const todayTime = () => new Date(new Date().toLocaleDateString()).getTime()

/**
 * 返回当前是今年的第几天
 * @param {Date} date 当前时间戳 
 */
export const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

/**
 * 时间个性化输出功能
 * @param {Number} time 要转换的时间戳
 * @return
  1、< 60s, 显示为“刚刚”
  2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
  3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
  4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
  5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
 */
export const timeFormat = time => {
  const date = new Date(time),
    curDate = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 10,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours();

  let timeStr = '';

  if (year < curYear) {
    timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute
  } else {
    const pastTime = curDate - date,
      pastH = pastTime / 3600000

    if (pastH > curHour) {
      timeStr = month + '月' + day + '日 ' + hour + ':' + minute
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute
    } else {
      const pastM = curDate.getMinutes() - minute
      if (pastM > 1) {
        timeStr = pastM + '分钟前'
      } else {
        timeStr = '刚刚'
      }
    }
  }
  return timeStr
}


/**
 * 计算失效目标日期(以天为计算单位)
 * @param {Number} day 天数
 * @param {Date} time 几天后到时间
 * @returns 失效目标日期
 */
const waitInvalidDate = (day, time) => {
  let diffDate = new Date(time)
  diffDate.setDate(diffDate.getDate() + day)
  return diffDate.getFullYear() + '-' + (diffDate.getMonth() + 1) + '-' + diffDate.getDate() + ' ' + diffDate.getHours() + ':' + diffDate.getMinutes() + ':' + diffDate.getSeconds()
}
/**
 * 时间倒计时
 * @param {*} createTime 创建时间
 * @returns {Object} 剩余 days、hours、minutes、seconds
 */
export const waitPayTime = createTime => {
  const createTimer = new Date(createTime).getTime(),
    invalidDate = new Date(waitInvalidDate(1, createTimer)).getTime(),
    nowDate = new Date().getTime(),
    diffTimer = invalidDate - nowDate,

    days = Math.floor(diffTimer / (24 * 3600 * 1000)), // 相差天数

    hoursTotal = diffTimer % (24 * 3600 * 1000),  // 计算小时数 
    hours = Math.floor(diffTimer % (24 * 3600 * 1000) / (3600 * 1000)), // 计算天数后剩余的毫秒数

    minutesTotal = hoursTotal % (3600 * 1000), // 计算相差分钟数
    minutes = Math.floor(minutesTotal / (60 * 1000)), // 计算小时数后剩余的毫秒数

    secondsTotal = minutesTotal % (36 * 1000), // 计算相差秒数
    seconds = Math.round(secondsTotal / 1000) // 计算分钟数后剩余的毫秒数

  return {
    days,
    hours, 
    minutes,
    seconds
  }
}