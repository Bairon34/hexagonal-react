import {validate } from "uuid"

export interface Task {
    id:string,
    title:string,
    isDone:boolean,
    createAt: Date
}


export function ensureTaskIdIsValid(id:string): void{
    if(!validate(id)){
        throw new Error("Invalid task id")
    }
}

export function ensureTask(id:string): boolean{
    return validate(id)    
}