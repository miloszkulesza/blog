import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../../blog-service';
import { ToastrService } from 'ngx-toastr';
import { EditPostInterface } from '../../../interface/edit-post.interface';
import { PostInterface } from '../../../interface/get-posts-response.interface';

@Component({
  selector: 'app-edit-post',
  standalone: false,
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.scss'
})
export class EditPost implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EditPost>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly formBuilder = inject(FormBuilder);
  readonly blogService = inject(BlogService);
  readonly toastr = inject(ToastrService);
  id: number;
  editPostForm: FormGroup;
  post: PostInterface;

  ngOnInit() {
    this.id = this.data.id;
    this.getPost(this.id);
    this.createForm();
  }

  cancel() {
    this.dialogRef.close(false);
  }

  submit() {
    const data: EditPostInterface = {
      scope: 'PRIVATE',
      text: this.editPostForm.get('text').value,
      version: this.post.version
    }
    this.blogService.editPost(this.id, data).subscribe(res => {
      this.toastr.success('Edytuj post', "Post został zaktualizowany");
      this.dialogRef.close(true);
    }, error => {
      this.toastr.error('Edytuj post', 'W czasie edycji posta wystąpiły błędy');
    });
  }

  createForm() {
    this.editPostForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  getPost(id: number) {
    this.blogService.getPost(id).subscribe(data => {
      this.post = data;
    })
  }
}
