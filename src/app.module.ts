import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import * as path from 'path';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ProductsModule,
    FilesModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.v3aeh.mongodb.net/pizza-mizza?retryWrites=true&w=majority',
    ),
     ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, '',  'static')

     }),

  ],
})
export class AppModule {}
