import { IsString } from 'class-validator';

export class CreateProffessorDto {
  @IsString()
  name: string;

  @IsString()
  subject: string;
}
