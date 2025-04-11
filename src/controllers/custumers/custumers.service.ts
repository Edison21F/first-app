import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCustumerDto } from './dto/create-custumer.dto';
import { UpdateCustumerDto } from './dto/update-custumer.dto';
import { Custumer } from './custumers.interface';

@Injectable()
export class CustumersService {

  private custumers: Custumer[] = [
    
  ];

  create(createCustumerDto: CreateCustumerDto) {
    const newCustumer: Custumer = {
      id: this.custumers.length + 1,
      ...createCustumerDto,
    };
    this.custumers.push(newCustumer);
    return newCustumer;
  }

  findAll() {
    if(this.custumers.length === 0) {
      throw new NotFoundException('No se encontraron clientes');
    }
    return this.custumers;
  }

  findOne(id: number) {
    const custumer = this.custumers.find(custumer => custumer.id === id);
    if (!custumer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return custumer;
  }

  update(id: number, updateCustumerDto: UpdateCustumerDto) {
    const index = this.custumers.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    const updatedCustumer = {
      ...this.custumers[index],
      ...updateCustumerDto,
    };
    this.custumers[index] = updatedCustumer;
    return updatedCustumer;
  }

  remove(id: number) {
    const index = this.custumers.findIndex(c => c.id === id);
    if (index === -1) {
      throw new HttpException(`Customer with ID ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    this.custumers.splice(index, 1);
    return { message: `Customer with ID ${id} has been removed` };
  }
}
