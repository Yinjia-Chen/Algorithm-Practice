/**
 * 有深度限制的数组扁平化
 * @param {Array} arr 
 * @param {number} limit 
 * @returns {Array}
 */
function flattenWithLimit(arr, limit = Infinity) {
  if (!Array.isArray(arr)) return [arr];
  if (limit === 0) return arr.slice();
  let res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flattenWithLimit(item, limit - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}