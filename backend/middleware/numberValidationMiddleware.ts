import { Request, Response, NextFunction } from "express";

export const numberValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { num1, num2 } = req.body 
    console.log("MIDDLEWARE IS WORKING")

    req.body = {
        ...req.body, 
        validated: true
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.json('Error')
        return
    }
        
    next()

}