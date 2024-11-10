import { Module } from '@nestjs/common';
import { ProffessorService } from './proffessor.service';
import { ProffessorController } from './proffessor.controller';

@Module({
  controllers: [ProffessorController],
  providers: [ProffessorService],
})
export class ProffessorModule {}
