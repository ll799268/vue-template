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
    return data
  }
  data += ''
  do {
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4
    o1 = (bits >> 16) & 0xff
    o2 = (bits >> 8) & 0xff
    o3 = bits & 0xff
    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1)
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2)
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3)
    }
  } while (i < data.length)
  dec = tmp_arr.join('')
  dec = utf8_decode(dec)
  return dec
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

  str_data += ''
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i)
    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1)
      i++
    } else if (c1 > 191 && c1 < 224) {
      c2 = str_data.charCodeAt(i + 1)
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63))
      i += 2
    } else {
      c2 = str_data.charCodeAt(i + 1)
      c3 = str_data.charCodeAt(i + 2)
      tmp_arr[ac++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      )
      i += 3
    }
  }
  return tmp_arr.join('')
}