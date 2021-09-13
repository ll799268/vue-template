/**
 * 获取url后面通过?传参的参数
 * @param {String} name
 * @return {String} result
 */
export const getQueryString = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
    url = window.location.href,
    search = url.substring(url.lastIndexOf('?') + 1),
    r = search.match(reg);
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 获取url后面通过?传参的参数
 * @param {String} param 
 */
export const searchUrlParamsVal = (param = null) => {
  const href = window.location.href,
    params = href.slice(href.indexOf('?'), href.length).replace(/\?/, ''),
    paramsArr = params.split('&');
  let paramsObj = {}

  paramsArr.map(item => {
    const itemIdx = item.indexOf('='),
      itemKey = item.slice(0, itemIdx),
      itemVal = item.slice(itemIdx + 1, item.length);

    paramsObj[itemKey] = itemVal
  })
  return paramsObj[param] || null
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
    xmlhttp.send()
  } catch (e) {
  } finally {
    const result = xmlhttp.responseText;
    return result && xmlhttp.Status === 200
  }
}