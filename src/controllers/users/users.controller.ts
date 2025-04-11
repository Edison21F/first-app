import { Controller, Get, Post, Body, Param, Put, Patch, Delete, Query, HttpCode, HttpStatus, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
    private users = [];

    @Get('query')
    rutaQuery(@Query() query) {
        return `El dato query, x ha recibido el valor ${query.x} y el dato query, y ha recibido el valor ${query.y}`;
    }

    @Get('ruta-error-404')
    @HttpCode(HttpStatus.NOT_FOUND)
    rutaConError404() {
        return 'esto es un error 404!! no existe';
    }

    //Decorador RES

    @Get(':id')
    find(@Res() response, @Param('id') id: number) {
        if (id < 100) {
            return response.status(HttpStatus.OK).send(`Pagina del producto: ${id}`);
        } else {
            return response.status(HttpStatus.NOT_FOUND).send(`Producto con id ${id} not found`);
        }
    }
    @Get()
    getAllUsers() {
        return "lista de usuarios"
    }

    @Post()

    createUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return `Usuario creado con nombre ${name}, email ${email} y contraseña ${password}`;
    }


    @Get('hello')
    @HttpCode(204)
    getHelloInUsers(): string {
        return "Bienvenido a la sección de usuarios";
    }

    @Get('hot')
    getSpecialUsers(): string {
        return "Lista de usuarios destacados";
    }

    @Get(':id')
    findUser(@Param('id') id: number) {
        const user = this.users.find(u => u.id === id);
        return user ? user : `Usuario con id ${id} no encontrado`;
    }

    @Get(':id/:role')
    findUserWithRole(@Param('id') id: number, @Param('role') role: string) {
        return `El usuario ${id} tiene el rol de ${role}`;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    updateUser(@Param('id') id: number, @Body() body) {
        const user = this.users.find(u => u.name === id);
        if (user) {
            user.name = body.name;
            user.email = body.email;
            user.password = body.password;
            return `Usuario ${id} actualizado con los nuevos datos`;
        }
        return `Usuario con id ${id} no encontrado para actualizar`;
    }

    @Patch(':id')
    partialUpdateUser(@Param('id') id: number, @Body() body) {

        return `Usuario con id ${id} actializado los datos de nombre :${body.name} y correo: ${body.email}`;
    }

    @Delete(':id')
    //@HttpCode(HttpStatus.NO_CONTENT)
    deleteUser(@Param('id') id: number) {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return `Usuario ${id} eliminado correctamente`;
        }
        return `Usuario con id ${id} no encontrado para eliminar`;
    }




}