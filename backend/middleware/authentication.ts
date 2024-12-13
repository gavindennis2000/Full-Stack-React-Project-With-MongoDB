import { Request, Response, NextFunction } from "express";

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const { auth } = req.body 

    // check if authi s valid
    if (auth !== 'mike') {
        res.status(400).json('Unauthorized')
        return
    }
    
    next()

}