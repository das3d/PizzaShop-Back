import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop()
    name: string;

    @Prop()
    description: number;

    @Prop()
    size: number;
    @Prop()
    price: number;
    @Prop()
    count: number;
    @Prop()
    isDrink: boolean;
    @Prop()
    image: string;
    @Prop()
    isDiscount: boolean;
}

export const CartSchema = SchemaFactory.createForClass(Cart);