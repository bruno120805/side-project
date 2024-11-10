import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserDetails {
  @IsEmail()
  email: string;
  @IsString()
  displayName: string;
  @IsString()
  @IsOptional()
  password?: string;
}
