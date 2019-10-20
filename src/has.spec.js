import { has } from './has'

test('happy', () => {
  expect(has('a')({ a : 1 })).toBeTruthy()
  expect(has('b', { a : 1 })).toBeFalsy()
})

test('with non-object', () => {
  expect(has('a', undefined)).toEqual(false)
  expect(has('a', null)).toEqual(false)
  expect(has('a', true)).toEqual(false)
  expect(has('a', '')).toEqual(false)
  expect(has('a', /a/)).toEqual(false)
})
