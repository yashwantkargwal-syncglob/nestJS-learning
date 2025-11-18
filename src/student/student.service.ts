import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  private students = [
    {
      id: 1,
      name: 'yashwant',
      age: 20,
    },
    {
      id: 2,
      name: 'Ravi',
      age: 21,
    },
  ];

  // Get
  getAllStudents() {
    return this.students;
  }

  async getAllStudentsDB(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async getStudentsDbById(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  getStudentById(id: number) {
    const student = this.students.find((stu) => stu?.id === id);
    if (!student) throw new NotFoundException('Student Not Found!');
    return student;
  }

  // Post
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  async createStudentIntoMongo(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  // Put
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');

    this.students[index] = { id, ...data };

    return this.students[index];
  }

  async updateDbStudent(
    id: string,
    data: Partial<Student>,
  ): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // Patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  async patchDb(id: string, data: Partial<Student>): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // Delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');

    const deleted = this.students.splice(index, 1);

    return { message: 'Student Deleted Successfully', student: deleted[0] };
  }

  async deleteStudentDb(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id, { new: true });
  }
}
