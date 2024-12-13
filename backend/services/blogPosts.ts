import { BlogPostModel } from "../schemas"

export interface BlogPost {
    title: string,
    body: string, 
    author: string, 
    date: Date,
}

export const getAllBlogPosts = async () => {
    // lists all blog posts

    const allBlogPosts = await BlogPostModel.find({})
    return allBlogPosts
}

export const getIndividualBlogPost = async (id: string) => {
    // list individual blog post

    const individual = await BlogPostModel.findById(id)
    return individual
}

export const createBlogPost = async (blogPost: BlogPost) => {
    // creates blog post

    const createdBlogPost = await BlogPostModel.create(blogPost)
    return createdBlogPost
}


export const updateBlogPost = async (id: string, blogPost: BlogPost) => {
    // edits blog post based on id

    await BlogPostModel.findByIdAndUpdate(id, blogPost)
    const updatedBlogPost = await getIndividualBlogPost(id)
    return updatedBlogPost
}

export const deleteBlogPost = async (id: string) => {
    // deletes blog post based on id

    const bpToDelete = await BlogPostModel.findByIdAndDelete(id)
    return bpToDelete
}
