import {endsWith} from './endsWith'

test('string ends with suffix', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTruthy()
})

test.only('currying', () => {
  expect(endsWith('baz')('foo-bar')).toBeFalsy()
})

test('list ends with suffix', () => {
  expect(endsWith(['c'], ['a', 'b', 'c'])).toBeTruthy()
})
