import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionHandleController } from './exception-handle/exception-handle.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    CustomerModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [
    AppController,
    UserController,
    UserRoleController,
    ExceptionHandleController,
    EvController,
  ],
  providers: [AppService, UserService, EvService],
})
export class AppModule {}
