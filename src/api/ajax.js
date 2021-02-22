export const ajax = (method, url, callback, data, flag) => {
  var xhr;
  flag = flag || true;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHttp');
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }

  if (method == 'GET') {
    var date = new Date(),
      timer = date.getTime();
    xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
    xhr.send()
  } else if (method == 'POST') {
    xhr.open('POST', url, flag);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }
}