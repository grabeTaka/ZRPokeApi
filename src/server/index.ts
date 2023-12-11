import express, { Request, Response } from 'express'
import { addAliases } from 'module-alias'
import { join, resolve } from 'path'
import dotenv from 'dotenv'
import cors from 'cors'

import swaggerUi from 'swagger-ui-express'
const swaggerDocument = require('../../swagger.json')

const bodyParser = require('body-parser')
const { APPLICATION_PORT, APPLICATION_HOST } = process.env
dotenv.config()
const srcDir = join(__dirname, '..')
addAliases({ '@': resolve(srcDir) })

const PORT = +APPLICATION_PORT || 3000
const HOST = APPLICATION_HOST || '0.0.0.0'

const app = express()

import pokemonsRoutes from '@/modules/pokemon/routes'

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('ZRPoke test API')
})

app.use('/api/pokemons', pokemonsRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, HOST, () => {
    console.info(`🚀 Server is running on port ${PORT}`)
})
