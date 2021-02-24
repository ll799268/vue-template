/**
 * 按字母进行模糊查询
 * @arr 要转换的数组
 * @name 要排序对应的字段
 * @empty 是否清空 空项
 * @return 按[a-z]排序后的数组
 */

export const sortArrayZhName = (arr, name, empty) => {

  const letters = '*abcdefghjklmnopqrstwxyz'.split(''),
    zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')

  let segs = [],
    curr = {}

  letters.forEach((item, i) => {
    curr = {
      letter: item,
      data: []
    };
    arr.forEach((item) => {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(item[name], 'zh') <= 0) &&
        item[name].localeCompare(zh[i], 'zh') === -1) {
        curr.data.push(item);
      }
    });
    if (!empty || curr.data.length) {
      segs.push(curr)
      curr.data.sort(function (a, b) {
        return a[name].localeCompare(b[name], 'zh')
      })
    }
  })
  return segs
}

/**
 * 数组去重
 * @param {Array} arr
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 * 多维数组扁平化
 * @param {Array} arr
 */
export const arrDeepFlat = arr => {
  return arr.flat(Infinity) || arr.toString().split(',')
}

/**
 * 用洗牌算法随机打乱一个数组
 * @param {Array} arr
 */
export const shuffle = arr => {
  let leg = arr.length;
  while (leg) {
    const i = Math.floor(Math.random() * leg--);
    [arr[leg], arr[i]] = [arr[i], arr[leg]];
  }
  return arr;
};

/**
 * 树形菜单的制作
 * @param {Array} 扁平化数组
 * @return {Array} 多维数组
 */
export const formatToTree = arr => {
  const parent = arr.filter(item => !item.pid),
    children = arr.filter(item => item.pid)

  return toTree(parent, children)

  function toTree(parent, children) {
    parent.map(pItem => {
      children.map((cItem, index) => {
        if (pItem.id === cItem.pid) {
          let _c = JSON.parse(JSON.stringify(children))
          _c.splice(index, 1)
          toTree([cItem], _c)

          if (pItem.children) {
            pItem.children.push(cItem)
          } else {
            pItem.children = [cItem]
          }

        }
      })
    })
    return parent
  }
}

/**
 * 数组排序(快排 [left] + min + [right])
 */
export const quickArr = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [],
    right = [];

  const pIndex = Math.floor(arr.length / 2),
    p = arr.splice(pIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickArr(left).concat([p], quickArr(right));
}

/**
 * 数组排序(冒泡)
 */
export const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}