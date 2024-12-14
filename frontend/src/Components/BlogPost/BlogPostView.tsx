import { BlogPostController } from "./BlogPostController"
import { Paper } from '@mui/material'

// takes information from api call and displays in the form
// of a pokemon card

interface BlogPostProps {
    // types for pokemon data when converted
    id: string,
    title: string,
    body: string,
    author: string,
    date: string
}

export const BlogPostView = ({
    // pokemon card component - contains id, name, type, four moves, a picture, 
    // height in meters, and weight in kg
    title,
    body,
    author,
    date,
}: BlogPostProps) => {


    return (
        <center>
            <div style={{width: '800px', paddingTop: '20px', paddingBottom: '20px'}}>
                    <Paper>
                        <h1>{title}</h1>  { /* blogpost title */ }
                        <h4>by {author} ({date}) </h4>  { /* blogpost author and date */ }
                        <p>{body}</p>  { /* blogpost body */ }
                        <br/>
                    </Paper>
            </div>
        </center>
    )
}