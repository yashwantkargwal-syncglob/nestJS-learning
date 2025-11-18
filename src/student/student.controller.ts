import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.getAllStudents();
  }

  @Get('db')
  async getAllDb() {
    return this.studentService.getAllStudentsDB();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Get('db/:id')
  async getDbById(@Param('id') id: string) {
    return this.studentService.getStudentsDbById(id);
  }

  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }

  @Post('db')
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudentIntoMongo(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Put('db/:id')
  async updateDb(@Param('id') id: string, @Body() body: Partial<Student>) {
    return this.studentService.updateDbStudent(id, body);
  }

  @Patch(':id')
  partialUpdate(
    @Param('id') id: string,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }

  @Delete('db/:id')
  async deleteStudentDb(@Param('id') id: string) {
    return this.studentService.deleteStudentDb(id);
  }
}
