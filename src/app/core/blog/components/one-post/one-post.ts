import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog-service';
import { PostInterface } from '../../../interface/get-posts-response.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-post',
  standalone: false,
  templateUrl: './one-post.html',
  styleUrl: './one-post.scss'
})
export class OnePost implements OnInit{
  post: PostInterface;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.params['id'];
    this.blogService.getPost(id).subscribe(res => {
      this.post = res;
      console.log(this.post);
    })
  }
}
