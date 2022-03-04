import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';

@Module({
    controllers:[TasksController],
    providers:[TasksModule, TaskService]
})
export class TasksModule {}
