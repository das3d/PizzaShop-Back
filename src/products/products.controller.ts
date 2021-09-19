import {
  Body,
  Controller, Delete,
  Get,
  Param,
  Post, Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {FilterProductDto} from "./dto/filterProduct.dto";

@Controller('/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'large', maxCount: 1 },
      { name: 'small', maxCount: 1 },
    ]),
  )
  createProduct(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { large, small } = files;

    return this.productsService.createProduct(dto, large[0], small[0]);
  }
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: ObjectId) {
    return this.productsService.getProduct(id);
  }
  @Get('filterProducts/:param')
  filterProducts(@Param('param') filterStr: string) {
    return this.productsService.filterProducts(filterStr);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: ObjectId){
    return this.productsService.deleteProduct(id);
  }
}
