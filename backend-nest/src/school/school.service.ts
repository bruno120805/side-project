import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    await this.prisma.school.create({
      data: createSchoolDto,
    });
  }

  findAll() {
    return this.prisma.school.findMany({});
  }

  async findOne(id: string) {
    try {
      const school = await this.prisma.school.findUnique({
        where: {
          id: id,
        },
      });

      if (!school) {
        throw new NotFoundException('School not found');
      }

      return school;
    } catch (error) {
      throw new Error('School not found');
    }
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
