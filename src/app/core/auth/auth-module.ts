import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from './auth';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    Auth
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
],
  exports: [
    Auth
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AuthModule { }
