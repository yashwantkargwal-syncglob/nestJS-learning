import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/createCustomer.dto';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  //get
  @Get()
  getAll() {
    return {
      status: true,
      message: 'Fetch Successfully',
      total: this.customerService.getAll().length,
      data: this.customerService.getAll(),
    };
  }

  @Get(':id')
  getOne(@Param('id', UppercasePipe) id: string) {
    const data = this.customerService.getOne(Number(id));
    return {
      status: true,
      message: 'Fetch Successfully',
      data,
    };
  }

  //Post
  @Post()
  @UseGuards(AuthGuard)
  addCustomer(@Body(UppercasePipe) createCustomerDto: createCustomerDto) {
    const data = this.customerService.create(createCustomerDto);
    return {
      status: true,
      message: 'Customer added Successfully',
      data,
    };
  }

  //delete
  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.delete(Number(id));
  }
}
