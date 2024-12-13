import { Request, Response } from "express"
import { multiplyService } from "../services/multiplyService"

export const multiplyController = (req: Request, res: Response) => {
    const { num1, num2 } = req.body

    console.log(req.body)

    const result = multiplyService(num1, num2)

    res.json(result)
}