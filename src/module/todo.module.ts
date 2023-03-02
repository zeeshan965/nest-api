import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "../entity/todo.entity";
import { TodosController } from "../controller/todo.controller";
import { TodoService } from "../provider/todo.service";

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodoService],
})
export class TodosModule {}