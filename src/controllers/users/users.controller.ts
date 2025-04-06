import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    //metodo post de prueba de body

    @Post()
    createUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string
    ){
        return `createUser ${name} ${email} ${password}`;
    }
}
