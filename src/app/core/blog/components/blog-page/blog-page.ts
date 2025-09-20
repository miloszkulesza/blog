import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormPostInterface } from '../../../interface/create-form-post.interface';
import { CreatePostInterface } from '../../../interface/create-post.interface';
import { BlogService } from '../../blog-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  standalone: false,
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss'
})
export class BlogPage implements OnInit {
  blogForm: FormGroup<CreateFormPostInterface>;

  constructor(private blogService: BlogService,
    private toastrService: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.blogForm = new FormGroup<CreateFormPostInterface>({
      text: new FormControl(null, Validators.required),
      publicationDate: new FormControl(null)
    });
  }

  onSubmit(): void {
    if (this.blogForm.invalid)
      return;
    const data: CreatePostInterface = {
      text: this.blogForm.value.text,
      publicationDate: this.blogForm.value.publicationDate,
      scope: "PRIVATE"
    }
    this.blogService.addPost(data).subscribe(res => {
      this.toastrService.success('Dodaj post', 'Post został dodany');
      this.router.navigate(['blog']);
    }, error => {
      this.toastrService.error("Błąd dodawania posta");
    });
  }
}
