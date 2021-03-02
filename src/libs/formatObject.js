/**
 * 对象深度克隆
 * @origin 原对象
 * @target 目标对象
 * @return 克隆的新对象
 */

export const deepClone = (origin, target) => {
  const tar = target || {},
    toStr = Object.prototype.toString,
    arrayType = '[object Array]'

  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === arrayType ? [] : {}
        deepClone(origin[k], tar[k])
      } else {
        tar[k] = origin[k]
      }
    }
  }
  return tar
}

/**
 * 判断是否为空对象
 * @param {Object}} obj 
 */
export const isNullObject = obj => {
  return Object.keys(obj).length === 0
}