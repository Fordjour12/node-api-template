import * as dotenv from 'dotenv'
dotenv.config({ path: './src/.env' })

import express from 'express'

const app = express()

const port = Number(process.env.PORT)
console.log(process.env.NODE_ENV)
console.log(process.env.PORT)

app.listen(port, () => {
	console.log('Hello from this part of the world')
})
