// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'

const app = express()
const PORT = 3333

app.get('/', (req: Request, res: Response) => {
  res.json([{ message: 'ok' }])
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
