import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProffessorService } from './proffessor.service';
import { CreateProffessorDto } from './dto/create-proffessor.dto';
import { UpdateProffessorDto } from './dto/update-proffessor.dto';

@Controller('proffessor')
export class ProffessorController {
  constructor(private readonly proffessorService: ProffessorService) {}

  @Post()
  create(@Body() createProffessorDto: CreateProffessorDto) {
    return this.proffessorService.create(createProffessorDto);
  }

  @Get()
  findAll() {
    return this.proffessorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proffessorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProffessorDto: UpdateProffessorDto) {
    return this.proffessorService.update(+id, updateProffessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proffessorService.remove(+id);
  }
}
