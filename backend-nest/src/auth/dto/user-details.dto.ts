import { IsOptional, IsString } from 'class-validator';

export class UserDetails {
  @IsString()
  email: string;
  @IsString()
  displayName: string;
  @IsString()
  @IsOptional()
  password?: string;
}
