import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/')
  async addUser(
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    await this.userService.addUser({ name, username, password });
    return { msg: 'User Added Successfully', code: 200 };
  }

  @Get('/')
  async getAll() {
    const data = await this.userService.getAllUsers();
    return {
      data,
      msg: 'success',
      code: 200,
    };
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    const data = await this.userService.getUser(id);
    return {
      data,
      msg: 'success',
      code: 200,
    };
  }

  @Get('/name/:name')
  async getOneByName(@Param('name') name: string) {
    const data = await this.userService.getUserByName(name);
    return {
      data,
      msg: 'success',
      code: 200,
    };
  }

  @Patch('/:id')
  editUser() {}

  @Delete('/:id')
  deleteUser() {}
}
