import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ToDo} from "../entity/ToDo";
import { toUnicode } from "punycode";

export class ToDoController {

    private ToDoRepository = getRepository(ToDo);
    
    async create(request: Request, response: Response, next: NextFunction) {
        return this.ToDoRepository.save({
            description: request.body.description,
            completed: request.body.completed,
            created_at: request.body.created_at,
            completed_at: request.body.completed_at,
            notes: request.body.notes,
            category: request.body.category
        })
    }

    //Can mark todo as completed 
    async updcomplete(request: Request, response: Response, next: NextFunction) {
        let updateFlag = await this.ToDoRepository.findOne(request.params.id);
        updateFlag.completed = request.body.completed
        return this.ToDoRepository.save(updateFlag)
    }

    //Can delete todos 
    async remove(request: Request, response: Response, next: NextFunction) {
        let ToDoToRemove = await this.ToDoRepository.findOne(request.params.id);
        await this.ToDoRepository.remove(ToDoToRemove);
    }

    //Can show list of todos
    async all(request: Request, response: Response, next: NextFunction) {
        return this.ToDoRepository.find();
    }
 
    //Can update todo description, notes, categories
    async update(request: Request, response: Response, next: NextFunction) {
        let updateDesc = await this.ToDoRepository.findOne(request.params.id);
        updateDesc.description = request.body.description
        return this.ToDoRepository.save(updateDesc)
    }

    //Filter by category
    async byCategory(request: Request, response: Response, next: NextFunction) {
        return this.ToDoRepository.find(request.params.category);
        console.log(request.params.category)
    }

    //Filter by completed/uncompleted
    async byCompleted(request: Request, response: Response, next: NextFunction) {
        return this.ToDoRepository.find(request.params.completed);
    }

    //Filter by tasks today
    async byToday(request: Request, response: Response, next: NextFunction) {
        return this.ToDoRepository.find(request.params.created_at);
    }
}