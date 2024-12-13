import express, {Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { getAllBlogPostsController, getIndividualBlogPostController, createBlogPostController, updateBlogPostController, deleteBlogPostController } from './controllers'

dotenv.config() 

const app: Express = express() 
const port = 3001 

// body parser and cors - middleware
app.use(bodyParser())
app.use(cors())

app.get('/get-blogpost', getIndividualBlogPostController)
app.get('/get-all', getAllBlogPostsController)
app.post('/create-blogpost', createBlogPostController)
app.post('/update-blogpost', updateBlogPostController)
app.delete('/delete-blogpost', deleteBlogPostController)


// connect to mongoose
mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    // if mongoose connection isn't successful
    console.log('connection failed')
})