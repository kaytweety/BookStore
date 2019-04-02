import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
    submitted = false;
    id: number;
    sub: any;
   // mybook: any = BOOKS;

    book: Book;

    public books: Book[] = null;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.book = new Book();
   }

  ngOnInit() {
    
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")]],
      author: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [a-zA-Z0]+)*$")]],
      isbn: ['', [Validators.required, Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{4}$")]],
      no_copies: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(6)]],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });

  this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
  });

 

  this.books = this.bookService.fetchAllBook();
  if (this.id !== null) {
    for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].id == this.id) {
          this.book = this.books[i];
          break;
        }
    }
}
  console.log(this.books);
  }

  
    // convenient getter for easy access to form fields
    get f() { return this.bookForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.bookForm.invalid) {
            return;
        }

        alert('Form Submitted Successfully!')


           console.log(this.bookForm.value);
           

        // Update book to the previously existing array
        this.bookService.updateBook(this.book);

    }
}
