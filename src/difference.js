import { uniq } from './uniq'
import { equals } from './equals'
import { includes } from './includes'

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @category List
 * @sig a -> [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The elements of `list1` that are not in `list2`
 * @example
 *
 *      R.difference([1, 2, 3, 4], [3, 4, 5, 6]) // => [1, 2]
 *      R.difference([]); //=> []
 */
export function difference(list1, list2){
  if (arguments.length === 1) return _list => difference(list1, _list)

  return uniq(list1).filter(x1 => !includes(x1, list2))
  // const result = uniq(list1).filter(x1 => {
  //   const found = list2.find(x2 => equals(x1, x2))

  //   return found === undefined
  // })
  // return result
}
