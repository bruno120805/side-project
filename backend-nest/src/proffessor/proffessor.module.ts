import { Module } from '@nestjs/common';
import { ProffessorService } from './proffessor.service';
import { ProffessorController } from './proffessor.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProffessorController],
  providers: [ProffessorService, PrismaService],
})
export class ProffessorModule {}
