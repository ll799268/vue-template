// 将文件转换为十六进制字符串
const blobToString = blob => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      const res = reader.result
        .split('') // 将读取结果分割为数组
        .map(v => v.charCodeAt()) // 转为 Unicode 编码
        .map(v => v.toString(16).toUpperCase()) // 转为十六进制，再转大写
        .map(v => v.padStart(2, '0')) // 个位数补零
        .join(' ') // 转换为字符串
      resolve(res)
    }
    reader.readAsBinaryString(blob) // 将文件读取为二进制字符串
  })
}

// 判断是否jpg
const IsJpg = async file => {
  const res = await blobToString(file.slice(0, 3))
  return res === 'FF D8 FF'
}

// 判断是否png
const IsPng = async file => {
  const res = await blobToString(file.slice(0, 4))
  return res === '89 50 4E 47'
}

// 判断是否gif
const isGif = async file => {
  const res = await blobToString(file.slice(0, 4))
  return res === '47 49 46 38'
}

// 判断是否图片
const IsImage = async file => {
  if (!file) {
    return false
  }
  return (await IsJpg(file)) || (await IsPng(file)) || (await isGif(file))
}

export default IsImage


// eg:
  // file.addEventListener('change', async e => {
  //   const file = e.target.files[0],
  //     flag = await IsImage(file)

  //   console.log(flag)
  // })