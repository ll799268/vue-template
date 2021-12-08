import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

/**
 * 导出PDF
 * @param {Element} ele 要生成PDF的el
 * @param {String} pdfName PDF文件生成后的文件名字
 * @param {Function} callback 回调函数
 */
const exportPDF = (ele, pdfName, callback) => {
  html2canvas(ele, {
    logging: false
  }).then(function (canvas) {
    const pdf = new JsPDF('p', 'mm', 'a4'),    //A4纸，纵向
      ctx = canvas.getContext('2d'),
      a4w = 200, a4h = 297,    //A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域 200x 297
      imgHeight = Math.floor(a4h * canvas.width / a4w)    //按A4显示比例换算一页图像的像素高度
    let renderedHeight = 0

    while (renderedHeight < canvas.height) {
      const page = document.createElement('canvas')
      page.width = canvas.width
      page.height = Math.min(imgHeight, canvas.height - renderedHeight) //可能内容不足一页

      // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
      page.getContext('2d').putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0)
      // 添加图像到页面，保留10mm边距
      pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 5, 0, a4w, Math.min(a4h, a4w * page.height / page.width))

      renderedHeight += imgHeight

      if (renderedHeight < canvas.height) {
        pdf.addPage()
      }

    }

    pdf.save(pdfName)
    callback && callback()
  })
}

export default exportPDF