import { Request, Response } from 'express'
import { helloWorldService } from '../services/helloWorldService'

export const helloWorldController = (req: Request, res: Response) => {
    
    const result = helloWorldService()
    res.send(result)
}