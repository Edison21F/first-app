import { PartialType } from '@nestjs/mapped-types';
import { CreateCustumerDto } from './create-custumer.dto';

export class UpdateCustumerDto extends PartialType(CreateCustumerDto) {
    name?: string;
    age?: number;
    dateOfBirth?: Date;
}
