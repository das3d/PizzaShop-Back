import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Products, ProductsDocument} from "./schemas/products.schema";
import {CreateProductDto} from "./dto/createProduct.dto";
import {FilesService, FilesType} from "../files/files.service";
import {FilterProductDto} from "./dto/filterProduct.dto";


@Injectable()

export class ProductsService {
    constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>,
                private filesService: FilesService) {
    }

    async createProduct(dto: CreateProductDto, imageLarge, imageSmall): Promise<Products> {
        const largePath = this.filesService.createFiles(FilesType.LARGE, imageLarge);
        const smallPath = this.filesService.createFiles(FilesType.SMALL, imageSmall);
        const product = await this.productsModel.create({...dto, image: {large: largePath, small: smallPath}});
        return product;
    }

    async getAllProducts(): Promise<Products[]> {
        const products = await this.productsModel.find();
        return products;
    }

    async getProduct(id: ObjectId): Promise<Products> {
        const product = await this.productsModel.findById(id);
        return product;

    }

    async filterProducts(filterPayload: string): Promise<Products[]> {
        let products;
        switch (filterPayload) {
            case 'pizza' : {
                products = this.productsModel.find({isDrink: false})
                return products;
            }
            case 'drink' : {
                products = this.productsModel.find({isDrink: true})
                return products
            }
            case 'discount' : {
                products = this.productsModel.find({isDiscount: true})
                return products
            }
            default:{
                products = this.productsModel.find()
                return products
            }
        }
    }

    async deleteProduct(id: ObjectId): Promise<Products> {
        const product = await this.productsModel.findByIdAndDelete(id)
        return product;
    }
}