import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export const LocalStorageTaskRepository = (): TaskRepository =>{
    return{
        getAllTask: () =>{
            const tasks = localStorage.getItem("tasks")
            const parsedTasks = tasks ? JSON.parse(tasks) as Task[]: []
            return parsedTasks
        },
        saveTask: (task: Task) =>  {
            const tasks = localStorage.getItem("tasks")
            const parsedTasks = tasks ? JSON.parse(tasks) as Task[]: []

            const taskExists = parsedTasks.findIndex((t)=> t.id === task.id)
            
            if(taskExists != -1){
                 parsedTasks[taskExists] = task   
            }

            const newTask = tasks? [...JSON.parse(tasks), task]: [task]

            localStorage.setItem("tasks",JSON.stringify(newTask))

         },
         deleteTask:(id:string) =>{

         }


    }
}