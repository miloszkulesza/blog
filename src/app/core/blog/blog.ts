import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog-service';
import { GetPostsRequestInterface } from '../interface/get-posts-request.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostInterface } from '../interface/get-posts-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog implements OnInit{
  displayedColumns: string[] = ['id', 'text', 'createdDateTime', 'author', 'delete'];
  dataSource: MatTableDataSource<PostInterface>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private blogService: BlogService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(): void {
    const data: GetPostsRequestInterface = {
      page: '0',
      size: '10000'
    }
    this.blogService.getAllPosts(data).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteClick(rowId: number): void {
    console.log(`usuwam post ${rowId}`);
  }

  goToPost(rowId: number): void {
    this.router.navigate([`/one-post/${rowId}`]);
  }
}
