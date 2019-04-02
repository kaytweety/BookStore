import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent }      from './add-form/add-form.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
    { path: 'insertbook', component: AddFormComponent },
    { path: 'showbook', component: BooksComponent },
    { path: 'updatebook/:id', component: AddFormComponent },
    { path: '', redirectTo: '/showbook', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }