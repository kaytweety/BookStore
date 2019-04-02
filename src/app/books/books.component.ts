import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public selectedBook: Book;
  public books: Book[] = null;

  public constructor(private bookService: BookService) { }

  public onSelect(book: Book): void {
    this.selectedBook = book;
  }

  public ngOnInit(): any {
    this.bookService.fetchAllBook().subscribe((books: any) => {
      this.books = books;
    }, error => {
      console.log("Error :- " + JSON.stringify(error));
    });

  }

  public deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadAllBooks()
    });
  }

  private loadAllBooks() {
    this.bookService.fetchAllBook().subscribe((books: any) => {
      this.books = books;
    });
  }
}
