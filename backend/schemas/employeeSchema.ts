import { Schema, model } from "mongoose";

const EmployeeSchema = new Schema({
    fName: {
        type: String, 
        required: true, 
    },
    lName: {
        type: String, 
        required: true, 
    },
    jobTitle: {
        type: String, 
        required: true, 
        enum: [ 'Professor', 'Admin', 'Chair' ],
        default: 'Professor'
    },
    salary: {
        type: Number, 
        min: 0, 
        max: 100000, 
        default: 50000
    },
    dateHired: {
        type: Date, 
        default: Date.now
    },
})

export const EmployeeModel = model('Employee', EmployeeSchema)