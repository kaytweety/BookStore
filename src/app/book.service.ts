import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private domain = 'http://salahuddin3pakapp-env.wvnvyjm3am.us-east-1.elasticbeanstalk.com';

  private books: any = BOOKS;

  book: Book;

  public imageUrl: any;

  public constructor(private http: HttpClient, private router: Router) { }

  public fetchAllBook(): any {
    return this.http.get<any>(this.domain + '/book/fetchs');
  }

  public fetchBookById(id: any): any {
    return this.http.get<any>(this.domain + '/book/' + id);
  }

  public addBook(book: Book): any {
    return this.http.post(this.domain + '/book/add', book);
  }

  public updateBook(book: Book): any {
    return this.http.put(this.domain + '/book/%7Bid%7D?id=' + book.id, book);
  }

  public deleteBook(id: number): any {
    return this.http.delete(this.domain + '/book/' + id);
  }

}
