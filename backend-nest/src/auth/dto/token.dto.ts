import { IsString, IsUUID } from 'class-validator';

export class TokenDto {
  @IsString()
  email: string;
  @IsUUID()
  userId: string;
}
