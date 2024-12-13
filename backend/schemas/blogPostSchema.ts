import { Schema, model } from "mongoose";

const BlogPostSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        default: "Lounge Act"
    },
    body: {
        type: String, 
        required: true, 
        default: "Truth covered in security I can't let you smother me I'd like to, but it couldn't work Trading off and taking turns I don't regret a thing"
    },
    author: {
        type: String, 
        required: true,
        default: "Nirvana"
    },
    date: {
        type: Date, 
        required: true,
        default: Date.now
    },
})

export const BlogPostModel = model('BlogPost', BlogPostSchema)