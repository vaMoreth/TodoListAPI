import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    const { title, description } = createTodoDto;
    return this.todoService.createTodo(title, description);
  }
}
