/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s.
 *
 * @func
 * @category Object
 * @sig {*} -> {*}
 * @param {*} val The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
export function clone(val){
  const out = Array.isArray(val) ? Array(val.length) : {}
  if (val && val.getTime) return new Date(val.getTime())

  for (const key in val){
    const v = val[ key ]
    out[ key ] =
      typeof v === 'object' && v !== null ?
        v.getTime ?
          new Date(v.getTime()) :
          clone(v) :
        v
  }

  return out
}
