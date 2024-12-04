import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [];
  private id = 1;

  getTodos() {
    return this.todos;
  }

  createTodo(title: string, description?: string) {
    const newTodo = {
      id: this.id++,
      title,
      description,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
}
