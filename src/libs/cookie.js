const cookie = {
  set: function (name, value, time) {
    document.cookie = name + '=' + value + '; max-age=' + time;
    return this
  },
  remove: function (name) {
    return this.setCookie(name, '', -1)
  },
  get: function (name) {
    var allCookieArr = document.cookie.split('; ')
    for (var i = 0; i < allCookieArr.length; i++) {
      var itemCookieArr = allCookieArr[i].split('=')
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1]
      }
    }
    return undefined
  }
}

export default cookie