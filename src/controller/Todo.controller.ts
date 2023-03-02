import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TodoInterface } from '../interface/TodoInterface';
import { CreateTodoDto } from '../interface/CreateTodoDto';
import { TodosService } from '../provider/TodosService';

@Controller('cats')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDto);
    if (!todo) {
      return 'error in creating todo';
    }
    return 'todo created successfully';
  }

  @Get()
  async findAll(@Req() request: Request) {
    const cats: Array<TodoInterface> = await this.todosService.findAll();
    return cats;
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
