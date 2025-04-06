import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('inventarios')
export class ProductsController {
    @Get()
    getProducts(): string {
        return 'List of products';
    }


    //resive un parametro de la url
    @Get(':id')
    find(@Param() param) {
        return `Product with id ${param.id}`;
    }

    //resive varios parametros de la url
    @Get(':id/:size')
    findByIdAndSize(@Param() param) {
        return `Product with id ${param.id} and size ${param.size}😒`;
    }

    //destructuring de los parametros de la url
    @Get(':id/:size/:color')
    findByIdAndSizeAndColor(@Param('id') id: string, @Param('size') size: string, @Param('color') color: string) {
        return `Product with id ${id} and size ${size} and color ${color}`;
    }

    //Rutas Post 
    @Post()
    createProduct(@Body() body) {
        return `Product created with name ${body.name} and price ${body.price}`;
        
    }
}