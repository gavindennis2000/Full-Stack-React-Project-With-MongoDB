import { EmployeeModel } from "../schemas"

export interface Employee {
    fName: string, 
    lName: string, 
    jobTitle: 'Professor' | 'Admin' | 'Chair', 
    salary: number, 
    dateHired: Date,
}

export const getAllEmployees = async () => {

    const allEmployees = await EmployeeModel.find({})
    return allEmployees
}

export const getSingleEmployee = async (id: string) => {

    const result = await EmployeeModel.findById(id)
    return result
}

export const createEmployee = async (employee: Employee) => {

    const result = await EmployeeModel.create(employee)
    return result
}


export const updateEmployee = async (id: string, employee: Employee) => {

    await EmployeeModel.findByIdAndUpdate(id, employee)
    const updatedEmployee = await getSingleEmployee(id)
    return updatedEmployee
}

export const deleteEmployee = async (id: string) => {

    const result = await EmployeeModel.findByIdAndDelete(id)
    return result
}
