import { PartialType } from '@nestjs/mapped-types';
import { CreateProffessorDto } from './create-proffessor.dto';

export class UpdateProffessorDto extends PartialType(CreateProffessorDto) {}
