/**
 * Returns the number of elements in array/list
 *
 * @func
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
export function length(list){
  if (list == null || list.length === undefined) return NaN

  return list.length
}
