import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FilesType{
    LARGE = 'large',
    SMALL = 'small'
}
@Injectable()
export class FilesService{
    createFiles(type: FilesType, file): string{
        try {
            const fileExctension = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExctension
            const filePath = path.resolve(__dirname, '..', 'static', type )
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName
        }catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}