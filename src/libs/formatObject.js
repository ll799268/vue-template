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
 * @param {Object} obj 
 */
export const isNullObject = obj => Object.keys(obj).length === 0

/**
 * 计算对象的长度
 * @param {*} obj 
 */
export const objectLenght = obj => Object.keys(obj).length

/**
 * 替换JSON中的key
 * @param {Object} JSON对象 
 * @param {String} key值 
 * @returns 
 */
export const renameProperty = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}
