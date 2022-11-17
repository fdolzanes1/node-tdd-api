import express from 'express'
import router from './routers/index'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.status(200).send('Hello World!')
})

router(app)

app.listen(port)

export default app
