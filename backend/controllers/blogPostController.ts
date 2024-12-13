import { Request, Response } from "express"
import {createBlogPost, deleteBlogPost, getAllBlogPosts, getIndividualBlogPost, updateBlogPost} from "../services"
import { Error } from "mongoose"

export const getAllBlogPostsController = async (req: Request, res: Response) => {
    const allBlogPosts = await getAllBlogPosts() 
    res.json(allBlogPosts)
}

export const getIndividualBlogPostController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id

    try {
        const result = await getIndividualBlogPost(id) 
        res.json(result)
    } catch (e) {
        console.log(e)
        res.json("could not get BlogPost")
    }
}

export const createBlogPostController = async (req: Request, res: Response) => {
    const newBlogPost = req.body
    
    try {
        const result = await createBlogPost(newBlogPost)
        res.json(result)
    } catch (e) {
        console.log(e) 
        res.status(400).json('Blogpost creation failed. Unable to validate schema')
    }
}

export const updateBlogPostController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id
    const result = await updateBlogPost(id, req.body)
    res.json(result)
}

export const deleteBlogPostController = async (req: Request, res: Response) => {
    const id: string = req.body.id

    try {
        const result = await deleteBlogPost(id)
        res.json(result)
    } catch (e) {
        console.log(e)
        res.json("unable to delete BlogPost")
    }
}