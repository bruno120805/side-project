import { Injectable } from '@nestjs/common';
import { UpdateProffessorDto } from './dto/update-proffessor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProffessorDto } from './dto/create-proffessor.dto';

@Injectable()
export class ProffessorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProffessorDto: CreateProffessorDto, schoolId: string) {
    const proffessorData = await this.prisma.proffessor.create({
      data: {
        ...createProffessorDto,
        school: {
          connect: {
            id: schoolId,
          },
        },
      },
    });

    return proffessorData;
  }

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
