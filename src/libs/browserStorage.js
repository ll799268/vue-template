
/**
 * Local Storage 操作
 */
export const storage = {
  get: name => {
    const data = window.localStorage.getItem(name)
    if (!data) {
      return null
    }
    const obj = JSON.parse(data)
    if (new Date().getTime() > obj.time) {
      window.localStorage.removeItem(name)
      return null
    } else {
      return obj.data
    }
  },
  set: (name, value, day) => {
    const d = new Date()
    let time = 0
    day = (typeof(day) === 'undefined' || !day) ? 1 : day
    time = d.setHours(d.getHours() + (24 * day))
    window.localStorage.setItem(name, JSON.stringify({
      data: value,
      time: time
    }))
  },
  clear: name => {
    if (name) {
      window.localStorage.removeItem(name)
    } else {
      window.localStorage.clear()
    }
  }
}

/**
 * cookie 操作
 */
export const cookie = {
  get: name => {
    const str = document.cookie
    const arr = str.split('; ')
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[i].split('=')
      if (newArr[0] === name) {
        return newArr[1]
      }
    }
  },
  set: (name, value, day) => {
    const oDate = new Date()
    oDate.setDate(oDate.getDate() + (day || 30))
    document.cookie = name + '=' + value + ';expires=' + oDate + "; path=/;"
  },
  del: name => {
    document.cookie = name + '=;expires=' + new Date() + "; path=/;"
    // this.set(name, '', -1)
  }
}