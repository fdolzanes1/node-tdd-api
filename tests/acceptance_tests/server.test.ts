import { describe, expect, test } from '@jest/globals'
import request from 'supertest'

import app from '../../src/app'

describe('Server', () => {
  // test('Deve responder na porta 3000', () => {
  //   return request(app)
  //     .get('/')
  //     .then((res) => expect(res.status).toBe(200))
  // })

  test('Deve responder na porta 3000 com nova sintaxe', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
  })
})
