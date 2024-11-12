import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
  Query,
} from '@nestjs/common';
import { ProffessorService } from './proffessor.service';
import { UpdateProffessorDto } from './dto/update-proffessor.dto';
import { CreateProffessorDto } from './dto/create-proffessor.dto';

@Controller('proffessor')
export class ProffessorController {
  constructor(private readonly proffessorService: ProffessorService) {}

  @Post(':schoolId')
  create(
    @Body() createProffessorDto: CreateProffessorDto,
    @Param('schoolId') schoolId: string,
  ) {
    return this.proffessorService.create(createProffessorDto, schoolId);
  }

  @Get()
  findAll() {
    return this.proffessorService.findAll();
  }

  @Get('buscar')
  findByQuery(@Query('buscar') buscar: string, @Query('q') query: string) {
    return this.proffessorService.findManyProfessors(buscar, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProffessorDto: UpdateProffessorDto,
  ) {
    return this.proffessorService.update(+id, updateProffessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proffessorService.remove(+id);
  }
}
