import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../blog-service';
import { ToastrService } from 'ngx-toastr';
import { CreateCommentInterface } from '../../../interface/create-comment.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  standalone: false,
  templateUrl: './add-comment.html',
  styleUrl: './add-comment.scss'
})
export class AddComment implements OnInit {
  commentForm: FormGroup;
  id: number;

  constructor(public dialogRef: MatDialogRef<AddComment>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private toastr: ToastrService
  ) {
    this.id = data.id;
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  add(): void {
    const data: CreateCommentInterface = {
      postId: this.id,
      text: this.commentForm.get('comment').value
    }
    this.blogService.addComment(data).subscribe(res => {
      this.toastr.success('Dodaj komentarz', 'Udało się dodać komentarz.');
    }, error => {
      this.toastr.error('Dodaj komentarz', 'W czasie dodawania komentarza wystąpił błąd.');
    });
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
