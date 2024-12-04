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

  updateTodo(id: number, title?: string, description?: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    if (title) todo.title = title;
    if (description) todo.description = description;
    return todo;
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with id ${id} not found`);
    }
    const deleted = this.todos.splice(index, 1);
    return deleted[0];
  }  
  
}