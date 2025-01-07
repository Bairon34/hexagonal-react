import { Task } from "./Task";

export interface TaskRepository {
    getAllTask(): Task[];
    saveTask(task: Task): void;
    deleteTask(id:string): void;
}