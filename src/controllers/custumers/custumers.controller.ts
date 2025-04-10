import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { CustumersService } from './custumers.service';
import { CreateCustumerDto } from './dto/create-custumer.dto';
import { UpdateCustumerDto } from './dto/update-custumer.dto';

@Controller('custumers')
export class CustumersController {
  constructor(private readonly custumersService: CustumersService) {}

  @Post()
  create(@Body() createCustumerDto: CreateCustumerDto) {
    return this.custumersService.create(createCustumerDto);
  }

  @Get()
  findAll() {
    return this.custumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.custumersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustumerDto: UpdateCustumerDto) {
    return this.custumersService.update(+id, updateCustumerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.custumersService.remove(+id);
  }
}
