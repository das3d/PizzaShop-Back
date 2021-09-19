import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import {CartController} from "./cart.controller";
import {CartService} from "./cart.service";
import {Cart, CartSchema} from "./schemas/cart.schema";


@Module({
    controllers:[CartController],
    providers:[CartService],
    imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }])]
})

export class CartModule {}