import { describe, expect, test } from '@jest/globals'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const sum = 1 + 2
    expect(sum).toBe(3)
  })
})
