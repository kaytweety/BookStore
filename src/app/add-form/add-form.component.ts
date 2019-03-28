import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { Book } from './book.ts';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
     bookForm: FormGroup;
     submitted = false;
//    public Book:newBook = null;

    // know apply validation on isbn
    // patter should isbn => 123-234-1234
    /*profileForm = new FormGroup({
        bookName: new FormControl(''),
        authorName: new FormControl(''),
        isbn: new FormControl(''),
        no_copies: new FormControl(''),
        price: new FormControl('')
    });*/
    
    
    /*
    public onSubmit():any {
        this.newBook = this.bookForm.value;
        console.log(this.newBook);
    }*/
    
    public constructor(private fb: FormBuilder) { }
   /* public constructor() { 
    }*/

    public ngOnInit(): any {
        this.bookForm = this.fb.group({
            bookName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")]],
            authorName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [a-zA-Z0]+)*$")]],
            isbn: ['', [Validators.required, Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{4}$")]],
            no_copies: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(6)]],
            price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });
    }
    // convenience getter for easy access to form fields
    get f() { return this.bookForm.controls; }
    
     onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.bookForm.invalid) {
            return;
        }

        console.log(this.bookForm.value);
        alert('Form Submitted Successfully!')
    }

}
