import { Body, Controller, Get, NotFoundException, Param, Post, Query, Session, UseInterceptors } from '@nestjs/common';
import { createUsersDOT, getUsersDOT } from './user.DTO';
import { UserService } from './user.service';
import { SerializeInterceptor } from 'src/interceptor/interceptors';
import { UserDto } from './user.DTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService, private authService : AuthService) {}
  @Post('/signup')
  createUser(@Body() Body: createUsersDOT) {
    return this.authService.signup(Body.email, Body.password);
  }

  @Get("/signin")
  signin(@Body() Body : getUsersDOT) {
    return this.authService.signin(Body.email, Body.password);
  }

  @Get('/:id')
  @UseInterceptors(new SerializeInterceptor(UserDto))
  findById(@Param('id') id: number) {
    const user = this.userService.findOne(id);
    return user;
  }

  @Get('/all')
  findAll() {
    const user = this.userService.findAll();
    return user;
  }

  @Get()
  async findByEmail(@Query('email') email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found.`);
    }
    return user;
  }
  @Get('/colors/:color') 
  setColor(@Param('color') color: string, @Session() session: any) 
  { 
    session.color = color
  }
  @Get('/colors')
  getColor(@Session() session: any) 
  {
  return session.color
  }
}
