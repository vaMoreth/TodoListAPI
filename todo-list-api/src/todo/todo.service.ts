import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  getTodos() {
    return this.todoRepository.find();
  }

  createTodo(title: string, description?: string) {
    const newTodo = this.todoRepository.create({ title, description });
    return this.todoRepository.save(newTodo);
  }

  updateTodo(id: number, title?: string, description?: string) {
    return this.todoRepository.update(id, { title, description });
  }

  deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
