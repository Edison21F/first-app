import { Injectable } from '@nestjs/common';
import { CreateCustumerDto } from './dto/create-custumer.dto';
import { UpdateCustumerDto } from './dto/update-custumer.dto';
import { Custumer } from './custumers.interface';

@Injectable()
export class CustumersService {

  private custumers:Custumer[]=
  [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      dateOfBirth: new Date('1993-01-01'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      dateOfBirth: new Date('1998-05-15'),
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 28,
      dateOfBirth: new Date('1995-09-10'),
    }
  ]
    
  
  create(createCustumerDto: CreateCustumerDto) {
    const newCustumer: Custumer = {
      id: this.custumers.length + 1,
      ...createCustumerDto,
    };
    this.custumers.push(newCustumer);
    return newCustumer;
  }

  findAll() {
    return this.custumers;
  }

  findOne(id: number) {
    return this.custumers.find(custumer => custumer.id === id);
  }

  update(id: number, updateCustumerDto: UpdateCustumerDto) {
    const custumer = this.findOne(id);
    if (!custumer) {
      return null; 
    }
    const updatedCustumer = { ...custumer, ...updateCustumerDto };
    const index = this.custumers.findIndex(c => c.id === id);
    this.custumers[index] = updatedCustumer;
    return updatedCustumer;

  }

  remove(id: number) {
  this.custumers = this.custumers.filter(custumer => custumer.id !== id);
  return this.custumers;
  }
}
