import {Controller, Get} from "@nestjs/common";
import {CartModule} from "./cart.module";
import {CartService} from "./cart.service";

@Controller('/cart')

export class CartController {

    constructor(private cartService: CartService) {
    }

    @Get()
    getAllProducts() {
    }

    @Get()
    getProduct() {
    }
}