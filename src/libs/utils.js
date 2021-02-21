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
 * 获取当日零点时间戳
 * @returns { number }
 */
export const todayTime = () => {
  return new Date(new Date().toLocaleDateString()).getTime()
}

/**
 * 时间个性化输出功能
 * @param {Number} time 要转换的时间戳
 * @return {String}  
 * 
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
    timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
  } else {
    var pastTime = curDate - date,
      pastH = pastTime / 3600000;

    if (pastH > curHour) {
      timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute;
    } else {
      var pastM = curDate.getMinutes() - minute;
      if (pastM > 1) {
        timeStr = pastM + '分钟前';
      } else {
        timeStr = '刚刚';
      }
    }
  }
  return timeStr;
}





/**
 * 正则匹配数字
 * @param {String} string 要截取的字符串
 * @return {Boolean} result
 */
export const formatChooseNumber = string => {
  return string.replace(/[^0-9]/g, '')
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
 * @return {Boolean} result
 */
export const isPostCode = string => {
  return /^[1-9][0-9]{5}$/.test(string.toString());
}

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} phone 校验手机号
 * @return {Boolean} result
 */
export const checkTelphone = phone => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
  if (reg.test(phone)) return true
}

/**
 * 校验是否为中国大陆传真或固定电话号码
 * @param {String} telPhone 校验传真或固定电话号码
 * @return {Boolean} result
 */
export const isTel = string => {
  return /^([0-9]{3,4})?[0-9]{7,8}$|^([0-9]{3,4}-)?[0-9]{7,8}$/.test(string);
}

/**
 * 校验是否为QQ号码(非0开头的5位-13位整数)
 * @param {String} value 校验QQ号码
 * @return {Boolean} result
 */
export const isQQ = value => {
  return /^[1-9][0-9]{4,12}$/.test(value.toString());
}

/**
 * 校验字符的长度是否在规定的范围内
 * @param {String} string  校验字符
 * @param {String}  minInt 为在取值范围中最小的长度
 * @param {String}  maxInt 为在取值范围中最大的长度
 * @return {Boolean} result
 */
export const lengthRange = (string, minLength, maxLength) => {
  return Boolean(string.length >= minLength && string.length <= maxLength);
}

/**
 * 校验字符是否以字母开头
 * @param {String} string  校验字符
 * @return {Boolean} result
 */
export const letterBegin = string => {
  return /^[A-z]/.test(string);
}

/**
 * 校验字符是否为纯数字(整数) 字符全部为正整数(包含0)
 * @param {String} string  校验字符
 * @return {Boolean} result
 */
export const pureNum = string => {
  return /^[0-9]*$/.test(string);
}

/**
 * 校验是否为网址
 * 
  以https://、http://、ftp://、rtsp://、mms://开头、或者没有这些开头
  可以没有www开头(或其他二级域名)，仅域名
  网页地址中允许出现/%*?@&等其他允许的符号
 * @param {String} string  
 * @return {Boolean} result
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
 * @return {Boolean} result
 */
export const isIP = string => {
  return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(string);
}


/**
 * 判断手机运营商
 * @param {String} number 手机号
 * @return {String} result
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

/**
 * 判断浏览器内核
 * @return {String} result
 */
export const checkBrowser = () => {
  const u = navigator.userAgent
  const obj = {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是终端类型,值有ios,android,iPad
 * @return {String} result
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent;
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是否是微信,qq 或 uc
 * @return {String} result
 */
export const checkWeixinQqUc = () => {
  const u = navigator.userAgent;
  const obj = {
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信
    qq: u.match(/QQ/i) == 'qq' && !u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 检查是否是 IphoneX
 * @return {String} result
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
 * @return {Boolean} result
 */
export const isAppleDevice = () => {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
}

/**
 * 判断是否Touch屏幕
 */
export const isTouchScreen = () => {
  return (
    "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)
  );
}

/**
 * 获取页面高度
 * @return {String} 页面高度
 */
export const getPageHeight = () => {
  const g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;

  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}





/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = (func, delay) => {
  let timer = null
  return function () {
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
  return function () {
    if (!timeout) clearTimeout(timeout) // 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}





/**
 * 清除所有空格
 * @param {String} string 要清除的字符串
 * @return {String}
 */
export const clearSpaces = string => {
  return string.replace(/[\u4e00-\u9fa5]/g,'');
}

/**
 * 清除所有中文字符(包括中文标点符号)
 * @param {String} string 要清除的字符串
 * @return {String}
 */
export const clearCNChars = string => {
  return string.replace(/[\u4e00-\u9fa5]/g,'');
}





/**
 * 获取 url 后面通过?传参的参数
 * @param {String} name
 * @return {String} result
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
 * 检验url链接是否有效
 * @param {String} URL
 * @return {boolean} result
 */
export const getUrlState = URL => {
  let xmlhttp = new XMLHttpRequest('microsoft.xmlhttp');
  xmlhttp.open('GET', URL, false);
  try {
    xmlhttp.send();
  } catch (e) {
  } finally {
    const result = xmlhttp.responseText;
    if (result) {
      if (xmlhttp.Status == 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
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
 * 滚动条到指定位置动画
 * @param {Number} number 距离顶部位置
 * @param {Number} time 滚动总时间
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
 * 跳转新窗口
 * @param {*} url 链接
 * @param {*} windowName 窗口名字
 * @param {*} width 宽度
 * @param {*} height 高度
 */
export const openWindow = (url, windowName, width, height) => {
  const x = parseInt(screen.width / 2.0) - width / 2.0;
  const y = parseInt(screen.height / 2.0) - height / 2.0;
  const isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    const p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    retval = window.open(url, windowName, p);
  } else {
    const win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
      y +
      ",left=" +
      x +
      ",scrollbars=" +
      scrollbars +
      ",dialog=yes,modal=yes,width=" +
      width +
      ",height=" +
      height +
      ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
}

/**
 * 跨浏览器绑定事件
 * @param {Object} obj 原事件对象
 * @param {Object} evt 事件对象
 * @param {Function} fn 事件
 */
export const addEventSamp = (obj, evt, fn) => {
  if (!oTarget) {
    return;
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent('on' + evt, fn);
  } else {
    oTarget['on' + sEvtType] = fn;
  }
}

/**
 * 跨浏览器删除事件
 * @param {Object} obj 原事件对象
 * @param {Object} evt 事件对象
 * @param {Function} fn 事件
 */
export const delEvt = (obj, evt, fn) => {
  if (!obj) {
    return;
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (oTarget.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  } else {
    obj["on" + evt] = fn;
  }
}

/**
 * 加入收藏夹
 * @param {String} sURL 域名
 * @param {String} sTitle 标题
 */
export const addFavorite = (sURL, sTitle) => {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, '');
    } catch (e) {
      alert('加入收藏失败，请使用Ctrl+D进行添加');
    }
  }
}

/**
 * 提取页面代码中所有网址
 * @return {string} 网址结果
 */
export const searchAllWWW = () => {
  return document.documentElement.outerHTML
    .match(
      /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
    )
    .join("\r\n")
    .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, '');
}

/**
 * 全角半角转换
 * @param {String} sStr  要转换的字符串
 * @param {Number} iCase 0全到半，1半到全，其他不转化
 */

export const chgCase = (sStr, iCase) => {
  if (
    typeof sStr != "string" ||
    sStr.length <= 0 ||
    !(iCase === 0 || iCase == 1)
  ) {
    return sStr;
  }
  let i,
    oRs = [],
    iCode;
  if (iCase) {
    // 半 -> 全
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i);
      if (iCode == 32) {
        iCode = 12288;
      } else if (iCode < 127) {
        iCode += 65248;
      }
      oRs.push(String.fromCharCode(iCode));
    }
  } else {
    // 全 -> 半
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i);
      if (iCode == 12288) {
        iCode = 32;
      } else if (iCode > 65280 && iCode < 65375) {
        iCode -= 65248;
      }
      oRs.push(String.fromCharCode(iCode));
    }
  }
  return oRs.join('');
}

/**
 * 实现base64解码
 * @param {String} data 需要解码的字符串
 * @return {String} 解码后的字符串
 */
export const base64_decode = data => {
  const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let o1,
    o2,
    o3,
    h1,
    h2,
    h3,
    h4,
    bits,
    i = 0,
    ac = 0,
    dec = '',
    tmp_arr = [];
  if (!data) {
    return data;
  }
  data += '';
  do {
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
    o1 = (bits >> 16) & 0xff;
    o2 = (bits >> 8) & 0xff;
    o3 = bits & 0xff;
    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);
  dec = tmp_arr.join('');
  dec = utf8_decode(dec);
  return dec;
}

/**
 * 实现utf8解码
 * @param {String} data 需要解码的字符串
 * @return {String} 解码后的字符串
 */
export const utf8_decode = data => {
  let tmp_arr = [],
    i = 0,
    ac = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0;
  str_data += '';
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 > 191 && c1 < 224) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      i += 3;
    }
  }
  return tmp_arr.join('');
}

/**
 * 压缩css样式代码
 * @param {String} s css代码
 * @return {String} 压缩后的css代码 
 */
export const compresscss = s => {
  s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? "" : s[1];
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
 * @return 按[a-z]排序后的数组
 */

export const sortArrayZhName = (arr, name, empty) => {

  const letters = '*abcdefghjklmnopqrstwxyz'.split(''),
    zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')

  let segs = [],
    curr = {}

  letters.forEach((item, i) => {
    curr = {
      letter: item,
      data: []
    };
    arr.forEach((item) => {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(item[name], 'zh') <= 0) &&
        item[name].localeCompare(zh[i], 'zh') === -1) {
        curr.data.push(item);
      }
    });
    if (!empty || curr.data.length) {
      segs.push(curr)
      curr.data.sort(function (a, b) {
        return a[name].localeCompare(b[name], 'zh')
      })
    }
  })
  return segs
}

/**
 * 数组去重
 * @param {Array} arr
 * @return {Array} new arr
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 * 多维数组扁平化
 * @param {Array} arr
 * @return {Array} new arr 
 */
export const arrDeepFlat = arr => {
  return arr.flat(Infinity) || arr.toString().split(',')
}

/**
 * 用洗牌算法随机打乱一个数组
 * @param {Array} arr
 * @return {Array} new arr
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
 * @param {Array} 扁平化数组
 * @return {Array} 多维数组
 */
export const formatToTree = arr => {
  const parent = arr.filter(item => !item.pid),
    children = arr.filter(item => item.pid)

  return toTree(parent, children)

  function toTree(parent, children) {
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