import { Request, Response } from "express"
import { createEmployee, deleteEmployee, updateEmployee, getSingleEmployee, getAllEmployees } from "../services"
import { Error } from "mongoose"

export const getAllEmployeesController = async (req: Request, res: Response) => {
    const allEmployees = await getAllEmployees() 
    res.json(allEmployees)
}

export const getSingleEmployeeController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id

    try {
        const result = await getSingleEmployee(id) 
        res.json(result)
    } catch (e) {
        console.log(e)
        res.json("could not get employee")
    }
}

export const createEmployeeController = async (req: Request, res: Response) => {
    const newEmployee = req.body
    
    try {
        const result = await createEmployee(newEmployee)
        res.json(result)
    } catch (e) {
        console.log(e) 
        res.status(400).json('Validation failed')
    }
}

export const updateEmployeeController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id
    const result = await updateEmployee(id, req.body)
    res.json(result)
}

export const deleteEmployeeController = async (req: Request, res: Response) => {
    const id: string = req.body.id

    try {
        const result = await deleteEmployee(id)
        res.json(result)
    } catch (e) {
        console.log(e)
        res.json("unable to delete employee")
    }
}