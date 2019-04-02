import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const books = [
      { id: 1, name: 'Android', author: 'Big Nerd Ranch Guide', isbn: '159-3689-987', no_copies: 0, price: 0 },
      { id: 2, name: 'C++', author: 'Brian Karnighan', isbn: '160-3690-988', no_copies: 0, price: 0 },
      { id: 3, name: 'JAVA', author: 'Joshua Bloch', isbn: '161-3691-989', no_copies: 0, price: 0 },
      { id: 4, name: 'OOP', author: 'Robert Lafore', isbn: '162-3692-990', no_copies: 0, price: 0 }
    ];
    return { books };
  }
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  }

  constructor() { }
}
