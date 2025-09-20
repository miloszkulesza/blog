import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from './blog';
import { Info } from './components/info/info';
import { BlogPage } from './components/blog-page/blog-page';
import { Contact } from './components/contact/contact';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { OnePost } from './components/one-post/one-post';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    Blog,
    Info,
    BlogPage,
    Contact,
    OnePost
  ],
  imports: [
    CommonModule,
    MatFormField,
    ReactiveFormsModule,
    MatButton,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule
],
  exports: [
    Blog,
    Info,
    BlogPage,
    Contact,
    OnePost
  ]
})
export class BlogModule { }
