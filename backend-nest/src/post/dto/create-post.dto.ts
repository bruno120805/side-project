import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  proffessorName: string;

  @IsString()
  subject: string;

  @IsString()
  schoolName: string;
}
