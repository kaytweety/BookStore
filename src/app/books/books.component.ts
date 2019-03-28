import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books = BOOKS;
    selectedBook: Book;
  
  
    onSelect(book: Book): void {
        this.selectedBook = book;
    }
  constructor(private route: ActivatedRoute) {
      /*const id: string = route.snapshot.params.id;
      console.log(this.id);*/
  }

  ngOnInit() {
      
      /*this.sub = this.route
      .data
      .subscribe(v => console.log(v));*/
      
//      this.sub = this.route.params.subscribe(params => {
//          this.id = +params['id'];
//          console.log(this.id);
//      });
      
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        });
        console.log(this.id);

  }

}
