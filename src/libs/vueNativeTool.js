
/**
 * 是否兼容此对象
 * @param {object} Ctor 原生对象 eg: Promise
 * @returns 
 */
export function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}