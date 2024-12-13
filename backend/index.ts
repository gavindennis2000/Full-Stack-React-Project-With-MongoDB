import express, {Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { helloWorldController } from './controllers/helloWorldController'
import { myPostController  } from './controllers/myPostController'
import { multiplyController  } from './controllers/multiplyController'
import { numberValidationMiddleware } from './middleware/numberValidationMiddleware'
import { authentication } from './middleware/authentication'
import { createEmployeeController, deleteEmployeeController, getSingleEmployeeController, getAllEmployeesController, updateEmployeeController } from './controllers/employeeController'
import mongoose from 'mongoose'

dotenv.config() 

const app: Express = express() 
const port = 3001 

app.use(bodyParser())

app.get('/employee', getSingleEmployeeController)
app.get('/employees', getAllEmployeesController)
app.post('/create-employee', createEmployeeController)
app.post('/update-employee', updateEmployeeController)
app.delete('/delete-employee', deleteEmployeeController)

app.get('/', helloWorldController)

app.post('/add', authentication, numberValidationMiddleware, myPostController)
app.post('/multiply', authentication, numberValidationMiddleware, multiplyController)

app.get('/json', (req: Request, res: Response) => {
    console.log(req.query)

    res.send({
        hello: 'world'
    })
})

// connect to mongoose
mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    console.log('connection failed')
})