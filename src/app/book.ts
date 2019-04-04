import { FileInfo } from './file_info';

export class Book {
    id: number;
    name: string;
    author: string;
    isbn: string;
    no_copies: number;
    price: number;
    file_info: FileInfo;
}