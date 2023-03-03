import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoInterface } from '../interface/todo.interface';
import { CreateTodoDto } from '../interface/createTodoDto';
import { TodoService } from '../provider/todo.service';
import { QueryFailedError } from 'typeorm';

@Controller('cats')
export class TodosController {
  constructor(private todosService: TodoService) {}

  @Post()
  async create(@Body() data: CreateTodoDto) {
    const todo = await this.todosService.create(data);
    if (!todo) {
      return 'error in creating todo';
    }
    return 'todo created successfully';
  }

  @Get()
  async findAll() {
    try {
      const cats: Array<TodoInterface> = await this.todosService.findAll();
      console.log(cats);
      return cats;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return {
          message: error.message.replaceAll('"', ''),
        };
      }
    }
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data = await this.todosService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Todo fetched successfully',
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newCat: any = await this.todosService.update(id, body);
    console.log(newCat);
    return 'cat updated';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id);
    return 'cat deleted';
  }
}
