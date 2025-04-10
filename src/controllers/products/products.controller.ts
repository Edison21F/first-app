import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService:ProductsService){}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.productService.getId(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(
    @Body() body,
  ) {
    this.productService.insert(body);
  }
  @Put(':id')
  update(
    @Param('id') id: number, 
    @Body() body,
  ) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productService.delete(id);
  }

//   @Get()
//   getAllProducts():Product[]{
//     return this.productService.getAll();
//   }
//   @Post()
//   @HttpCode(204)
//   createProduct(
//     @Body('name') name: string,
//     @Body('description')description :string
//   ){
//     this.productService.insert({
//       id: this.productService.getAll().length,
//       name,
//       description
//     });
//   }
//     @Get()
//   getHelloInProducts(): string {
//      return "Muchacho tamo en produccion";
//     }
//   @Get('hot')
//         getSpecialProducts(): string {
//      return "Lista de los productos";
//     }
//     // @Get(':id')
//     //     find(@Param() params) {
//     //  return `El producto que estas consulatando es el${params.id}`;
//     // }
//     // @Get(':id/:size')
//     //     findWithSize( @Param() params) {
//     //  return `En esta ruta obtenemos el producto ${params.id}, pero en su tamaño ${params.size}`;
//     // }
//     // @Get(':id/:size')
//     //  findWithSize( @Param() params) {
//     //  return `En esta ruta obtenemos el producto ${params.id}, pero en su tamaño ${params.size}`;
//     // }
//     @Get(':id/:size')
//      findWithSize(@Param('id') id: number, @Param('size') size: string ) {
//      return `Página de detalle de producto ${id}, en tamaño ${size}`;
//     }
//     // @Post()
//     // createProduct() {
//     //   return 'Estamos atendiendo una solicitud de tipo Post';
//     // }
//     // @Post()
//     // createProduct(@Body() body) {
//     //   return `Creo un producto ${body.name} con descripción ${body.description}`;
//     // }
//     // @Post()
//     //  createProduct(@Body() body) {
//     //  return body;
//     // }
//     // @Post()
//     // @HttpCode(204)
//     // createProduct(
//     //   @Body('name') name: string, 
//     //   @Body('description') description: string
//     // ) {
//     //   return `Creo el producto ${name} con descripción ${description}.`;
//     // }

//     @Get('ruta-error-404')
//     @HttpCode(HttpStatus.NOT_FOUND)
//     rutaConError404(){
//       return 'esto es un error 404!! no existe';
//     }

//     //Decorador RES

//     // @Get(':id')
//     // find(@Res() response, @Param('id') id:number){
//     //   if(id<100){
//     //     return response.status(HttpStatus.OK).send(`Pagina del producto: ${id}`);
//     //   }else{
//     //     return response.status(HttpStatus.NOT_FOUND).send(`Producto con id ${id} not found`);
//     //   }
//     // }
//     //decorador PUT
//     @Put(':id')
//     update(@Param('id') id:number, @Body() body){
//       return `Estas haciendo una operacion del recurso ${id} con ${body.name} y ${body.description}`;
//     }
//     //decorador Patch

//     @Patch(':id')
//     partialUpdate(@Param('id') id: number, @Body() body) {
//     return `Actualización parcial del ítem ${id}`;
//     }
    
//     @Delete(':id')
//     @HttpCode(HttpStatus.NO_CONTENT)
//     delete(@Param('id') id: number) {
//       return `Hemos borrado el producto ${id}`;
//     }

//     @Get('query')
//     rutaQuery(@Query() query) {
//     return `El dato query, x ha resivido el valor ${query.x} `;
// }
}
