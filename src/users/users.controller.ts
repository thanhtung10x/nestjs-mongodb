import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CreateUserDto } from './Dto/User.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.UsersService.create(createUserDto);
    } catch {
      return new Error('lỗi!');
    }
  }
}
