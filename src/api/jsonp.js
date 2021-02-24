export function jsonp({
  url,
  param,
  callback
}) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script')
    window.callback = function(data) {
      resolve(data)
      document.body.removeChild('script')
    }
    var param = {...param,
      callback
    }
    var arr = []
    for (let key in param) {
      arr.push(`${key}=${param[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.body.appendChild(script)
  })
}