import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  userName: string;
}

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUser() {
    return this.userService.getUser();
  }

  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  postUser(@Body() body: CreateUserDto) {
    return this.userService.postUserData(body);
  }
}
