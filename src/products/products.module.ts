import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {ProductsController} from "./products.controller";
import {ProductsService} from "./products.service";
import {Products, ProductsSchema} from "./schemas/products.schema";
import {FilesService} from "../files/files.service";


@Module({
    controllers:[ProductsController],
    providers:[ProductsService, FilesService],
    imports: [MongooseModule.forFeature([{ name: Products.name, schema: ProductsSchema }])]
})

export class ProductsModule{}