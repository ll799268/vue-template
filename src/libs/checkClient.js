/**
 * 是否为PC端
 */
export const isPC = () => {
  const userAgentInfo = navigator.userAgent,
   Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 判断浏览器内核
 * @return {String} result
 */
export const checkBrowser = () => {
  const u = navigator.userAgent
  const obj = {
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是终端类型
 * @return { String } ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是否是微信,qq 或 uc
 * @returns
 */
export const checkWeixinQqUc = () => {
  const u = navigator.userAgent
  const obj = {
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信
    qq: u.match(/QQ/i) == 'QQBrowserLite' && !u.indexOf('MQQBrowser') > -1, //是否QQ
    uc: u.indexOf('UCBrowser') > -1
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断浏览器类型
 * @returns 1微信、2支付宝
 */
export const checkBrowser = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  let typeNum = 0;
  if (ua.indexOf('micromessenger') > 0) {
    typeNum = 1;
  }
  if (ua.indexOf('alipayclient') > 0) {
    typeNum = 2;
  }

  return typeNum;
};

/**
 * 检查是否是 IphoneX
 * @returns
 */
export const checkIsIphoneX = () => {
  const u = navigator.userAgent
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS && screen.height >= 812) {
    return true
  }
};

/**
 * 检查是否是 Apple设备
 * @returns
 */
export const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform)

/**
 * 判断是否Touch屏幕
 */
export const isTouchScreen = () => {
  return (
    "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)
  );
}

/**
 * 判断设备是几倍屏
 * @returns 
 */
export const devicePixelRatioNum = () => window.devicePixelRatio()