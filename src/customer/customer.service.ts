import { Injectable, NotFoundException } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/createCustomer.dto';

@Injectable()
export class CustomerService {
  private customer: ICustomer[] = [];

  getAll(): ICustomer[] {
    return this.customer;
  }

  getOne(id: number): ICustomer {
    const found = this.customer.find((c) => c?.id === id);
    if (!found) throw new NotFoundException('Customer Not Found!');
    return found;
  }

  create(createCustomerDto: createCustomerDto): ICustomer {
    const newCustomer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customer.push(newCustomer);
    return newCustomer;
  }

  delete(id: number): ICustomer[] {
    const index = this.customer.findIndex((c) => c?.id === id);
    if (index === -1) throw new NotFoundException('Customer not found');
    const deletedCustomer = this.customer.slice(index, 1);
    this.customer.splice(index, 1);
    return deletedCustomer;
  }
}
