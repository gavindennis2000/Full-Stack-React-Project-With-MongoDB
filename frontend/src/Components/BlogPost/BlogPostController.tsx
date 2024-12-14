import React, { useState, useEffect } from "react";
import { BlogPostView } from "./BlogPostView"
import { Paper, TextField} from '@mui/material'
import axios from 'axios'

// BlogPost Controller - handles API calls and converts to a proper object to 
// be parsed by BlogPostView

interface BlogPost {
    // types of data extracted from blogpost api
    id: string,
    title: string,
    body: string,
    author: string,
    date: string
}

interface BlogPostFromAPI {
    // same thing but id has an underscore
    _id: string,
    title: string,
    body: string,
    author: string,
    date: string
}

export const BlogPostController = () => {

    // handle data grab from api
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>()
    const fetchBlogPosts = async () => {
        try {
            const result = await axios.get('http://localhost:3001/get-all')
            const { data } = result 
            const blogPostList: BlogPostFromAPI[] = data

            const blogPostArr: BlogPost[] = blogPostList.map(blogPost => {
                const individualBlogPost: BlogPost = {
                    id: blogPost._id,
                    title: blogPost.title,
                    body: blogPost.body,
                    author: blogPost.author,
                    date: blogPost.date
                }
                return individualBlogPost
            })
            setBlogPosts(blogPostArr)
        }
        catch (e) {
            setBlogPosts(undefined)
        }
    } 
        
    useEffect(() => {
        fetchBlogPosts()
    }, [])

    return (
        <center>
            <div style={{width: '800px'}}>
                <Paper style={{backgroundColor: 'white'}}>
                </Paper>
            </div>
            { blogPosts ? (  // only show blogpost if the value isn't null
                blogPosts.map(blogPost => {
                    return (
                        <BlogPostView
                            key={blogPost.id}
                            {...blogPost}
                        />
                    )
                })) : <Paper style={{width: '800px', margin: '10px'}}>No blog posts.</Paper> 
            }
        </center>
    )
}