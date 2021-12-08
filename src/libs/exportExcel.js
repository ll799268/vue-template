
/**
 * 导出excel
 * @param {Array} dataSource 数据源数组(二位数组)
 * @param {Array} titles 标题数组
 */
 const exportExcel = ({ dataSource = [], titles = [], fileName = '客户统计_' + new Date().toLocaleDateString(), suffix = 'csv' }) => {
  let dataType = "\uFEFF" //解决乱码问题

  dataType += titles.join(',')  //添加表格的头
  dataType += '\n' // 以上是导出的Excel文件头部

  // 从dataSource中取出数据存入数据源（dataType）
  dataSource.map(item => dataType += `${ item.join(',') }\n`)

  // 使用Blob，获得二进制实例
  const csvData = new Blob([dataType], {
    type: 'text/csv'
  })

  // 创建a标签
  const _a = document.createElement('a')
  /**
  * URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL
  * 这里相当于为a标签添加了一个下载地址
  */
  _a.href = URL.createObjectURL(csvData)
  // 该a标签点击后会打开新的标签页，人机交互会更加舒适
  _a.target = '_blank'
  // 为a标签规定被下载的超链接目标
  _a.download = `${ fileName }.${ suffix }`
  // 将这个制作好的a标签置入body，并在点击之后移除，降低外界感知
  document.body.appendChild(_a)
  _a.click()
  document.body.removeChild(_a)
}

export default exportExcel