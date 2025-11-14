import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guard/role/role.decorator';
import { EUser } from 'src/guard/role/role.enums';
import { RoleGuard } from 'src/guard/role/role.guard';

@Controller('user-role')
export class UserRoleController {
  @Get('admin-data')
  @UseGuards(RoleGuard)
  @Roles(EUser.admin)
  getAdmin() {
    return { message: 'Only Admin can access' };
  }

  @Get('user-data')
  //   @UseGuards(RoleGuard)
  @Roles(EUser.user)
  getUser() {
    return { message: 'Anyone can access' };
  }
}
