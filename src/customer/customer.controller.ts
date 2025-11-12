import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/createCustomer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  //get
  @Get()
  getAll() {
    return {
      status: true,
      message: 'Fetch Successfully',
      data: this.customerService.getAll(),
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    const data = this.customerService.getOne(Number(id));
    return {
      status: true,
      message: 'Fetch Successfully',
      data,
    };
  }

  //Post
  @Post()
  addCustomer(@Body() createCustomerDto: createCustomerDto) {
    const data = this.customerService.create(createCustomerDto);
    return {
      status: true,
      message: 'Customer added Successfully',
      data,
    };
  }

  //delete
  @Delete()
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.delete(Number(id));
  }
}
