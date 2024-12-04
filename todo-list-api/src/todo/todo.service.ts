import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [];

  getTodos() {
    return this.todos;
  }
}
