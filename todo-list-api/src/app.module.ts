import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'todolist-nestjs.database.windows.net',
      port: 1433,
      username: 'se',
      password: '12341234Rfrf/',
      database: 'TodoListDB',
      entities: [Todo],
      synchronize: true,
      options: {
        encrypt: true, 
      },
    }),
    TypeOrmModule.forFeature([Todo]),
    TodoModule,
  ],
})
export class AppModule {}
