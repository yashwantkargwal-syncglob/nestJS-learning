import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { UserRoleController } from './user-role/user-role.controller';

@Module({
  imports: [StudentModule, CustomerModule],
  controllers: [AppController, UserController, UserRoleController],
  providers: [AppService, UserService],
})
export class AppModule {}
