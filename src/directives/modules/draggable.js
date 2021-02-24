const draggable = {
  inserted: el => {
    el.style.cursor = 'move'

    el.onmousedown = e => {
      let disx = e.pageX - el.offsetLeft,
        disy = e.pageY - el.offsetTop

      document.onmousemove = e => {
        let x = e.pageX - disx,
          y = e.pageY - disy,
          maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width),
          maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)

        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.position = 'fixed'
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}
export default draggable