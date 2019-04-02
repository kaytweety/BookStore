import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
     bookForm: FormGroup;
     submitted = false;
     id: number;
     sub: any;
     public msgPage: String;

     book: Book;

     public books: Book[] = null;

     public constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bookService: BookService) {
         this.book = new Book();
     }

     ngOnInit() {
         console.log(this.router.url);
         this.bookForm = this.fb.group({
             name: ['', Validators.required],
             author: ['', Validators.required],
             isbn: ['', [Validators.required, Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{4}$")]],
             no_copies: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
             price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
         });

         if (this.router.url === '/insertbook') {
             this.msgPage = "Add Book";
         } else {
             this.msgPage = "Update Book";
             this.sub = this.route.params.subscribe(params => {
                this.id = +params['id'];
                console.log(this.id);
                this.bookService.fetchBookById(this.id)
                .subscribe(
                   data => {
                       this.book=data;
                       console.log(this.book);
                    },
                    error => {
                       console.log("Error :- " + JSON.stringify(error));
                     });
            });
   
         }

     }
     // convenient getter for easy access to form fields
     get f() { return this.bookForm.controls; }

     onSubmit() {
         this.submitted = true;

         // stop here if form is invalid
         if (this.bookForm.invalid) {
             return;
         }

         console.log(this.bookForm.value);

         if (this.router.url === '/insertbook') {
             // add book to the previously existing array
             this.book.id = this.books.length + 1;
             console.log(this.book.id);
             this.bookService.addBook(this.book)
             .subscribe(
                data => {
                    alert('Form Submitted Successfully!');
                     this.router.navigate(['showbook']);
                 },
                 error => {
                    console.log("Error :- " + JSON.stringify(error));
                  });
         }
         else {
             this.book.id= this.id;
             // Update book in the existing array
             this.bookService.updateBook(this.book)
             .subscribe(
                data => {
                    alert('Book updated Successfully!');
                     this.router.navigate(['showbook']);
                 },
                 error => {
                    console.log("Error :- " + JSON.stringify(error));
                  });
         }
     }
}
