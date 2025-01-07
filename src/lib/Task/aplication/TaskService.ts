import { ensureTaskIdIsValid } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export const cteateTaskService = (repository: TaskRepository) => ({
    getAll:() => repository.getAllTask(),

    save: (id:string,title:string,isDone:boolean) =>{
        ensureTaskIdIsValid(id)

        repository.saveTask({
            id,
            title,
            isDone,
            createAt : new Date()
        })
    },

    delete: (id:string) =>{
        ensureTaskIdIsValid(id)
        repository.deleteTask(id)
    },
})