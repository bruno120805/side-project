import { Injectable } from '@nestjs/common';
import { UpdateProffessorDto } from './dto/update-proffessor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProffessorService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.proffessor.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} proffessor`;
  }

  update(id: number, updateProffessorDto: UpdateProffessorDto) {
    return `This action updates a #${id} proffessor`;
  }

  remove(id: number) {
    return `This action removes a #${id} proffessor`;
  }
}
