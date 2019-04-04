import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = BOOKS;
  public selectedBook: Book;
  imageBlobUrl: string | null = null;
  public imageToShow: any;

  public constructor(private bookService: BookService, private http: HttpClient) { }

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
