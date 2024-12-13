import express, {Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { helloWorldController } from './controllers/helloWorldController'
import { myPostController  } from './controllers/myPostController'
import { multiplyController  } from './controllers/multiplyController'
import { numberValidationMiddleware } from './middleware/numberValidationMiddleware'
import { authentication } from './middleware/authentication'

dotenv.config() 

const app: Express = express() 
const port = 3001 

app.use(bodyParser())

app.get('/', helloWorldController)

app.post('/add', authentication, numberValidationMiddleware, myPostController)
app.post('/multiply', authentication, numberValidationMiddleware, multiplyController)

app.get('/json', (req: Request, res: Response) => {
    console.log(req.query)

    res.send({
        hello: 'world'
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})