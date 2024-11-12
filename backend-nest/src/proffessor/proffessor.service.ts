import { Injectable, NotFoundException } from '@nestjs/common';
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
        name: createProffessorDto.name.replaceAll(' ', '+'),
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

  async findManyProfessors(buscar: string, query: string) {
    try {
      if (buscar === 'Profesores') {
        const professors = await this.prisma.proffessor.findMany({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            name: true,
            subject: true,
            school: {
              select: {
                name: true,
              },
            },
            posts: {
              select: {
                title: true,
                content: true,
              },
            },
          },
        });

        if (!professors)
          throw new NotFoundException('No se encontraron profesores');

        return professors;
      }
      if (buscar === 'Escuelas') {
        const schools = await this.prisma.school.findMany({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            name: true,
            Proffessor: {
              select: {
                name: true,
                subject: true,
                posts: {
                  select: {
                    title: true,
                    content: true,
                  },
                },
              },
            },
          },
        });

        if (!schools) throw new NotFoundException('No se encontraron escuelas');
        return schools;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  update(id: number, updateProffessorDto: UpdateProffessorDto) {
    return `This action updates a #${id} proffessor`;
  }

  remove(id: number) {
    return `This action removes a #${id} proffessor`;
  }
}
