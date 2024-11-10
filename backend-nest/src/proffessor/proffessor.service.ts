import { Injectable } from '@nestjs/common';
import { CreateProffessorDto } from './dto/create-proffessor.dto';
import { UpdateProffessorDto } from './dto/update-proffessor.dto';

@Injectable()
export class ProffessorService {
  create(createProffessorDto: CreateProffessorDto) {
    return 'This action adds a new proffessor';
  }

  findAll() {
    return `This action returns all proffessor`;
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
