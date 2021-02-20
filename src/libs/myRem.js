;(function(doc, win) {
  myRem()
  
  function myRem () {
    const _width = doc.documentElement.clientWidth
    doc.documentElement.style.fontSize = _width / 3.75 + 'px'
  }

  win.onresize = myRem
})(document, window)