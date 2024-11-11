import { IsEmail, IsUUID } from 'class-validator';

export class TokenDto {
  @IsEmail()
  email: string;
  @IsUUID()
  userId: string;
}
