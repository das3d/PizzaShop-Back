import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;
@Schema()
class Image{
    @Prop()
    large: string;
    @Prop()
    small: string;
}
@Schema()
export class Products {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    size: number;
    @Prop()
    price: number;
    @Prop()
    count: number;
    @Prop()
    isDrink: boolean;
    @Prop({type: Image})
    image: Image;
    @Prop()
    isDiscount: boolean;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);