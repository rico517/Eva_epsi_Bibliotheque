import { Expose, Exclude } from 'class-transformer'
import { IsEmail, IsString } from 'class-validator';

export class UserDto {
    @Expose()
    id: number;

    @Expose()
    email: string;
}

export class createUsersDOT {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  }

export class getUsersDOT {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  }
  