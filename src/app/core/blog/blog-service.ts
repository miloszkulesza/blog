import { Injectable } from '@angular/core';
import { CreatePostInterface } from '../interface/create-post.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetPostsResponseInterface, PostInterface } from '../interface/get-posts-response.interface';
import { GetPostsRequestInterface } from '../interface/get-posts-request.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = "http://localhost:8080/api/posts"
  constructor(private http: HttpClient) {

  }

  addPost(data: CreatePostInterface): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.url}`, data, {headers});
  }

  getAllPosts(data: GetPostsRequestInterface): Observable<GetPostsResponseInterface> {
    return this.http.get<GetPostsResponseInterface>(`${this.url}?page=${data.page}&size=${data.size}`);
  }

  getPost(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(`${this.url}/${id}`);
  }
}
