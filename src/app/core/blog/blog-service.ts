import { Injectable } from '@angular/core';
import { CreatePostInterface } from '../interface/create-post.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetPostsResponseInterface, PostInterface } from '../interface/get-posts-response.interface';
import { GetPostsRequestInterface } from '../interface/get-posts-request.interface';
import { CreateCommentInterface } from '../interface/create-comment.interface';
import { EditPostInterface } from '../interface/edit-post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = "http://localhost:8080/api/posts";
  urlComments = "http://localhost:8080/api/comments";

  constructor(private http: HttpClient) {

  }

  private createTokenHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  addPost(data: CreatePostInterface): Observable<any> {
    const headers = this.createTokenHeader();
    return this.http.post<any>(`${this.url}`, data, {headers});
  }

  getAllPosts(data: GetPostsRequestInterface): Observable<GetPostsResponseInterface> {
    return this.http.get<GetPostsResponseInterface>(`${this.url}?page=${data.page}&size=${data.size}`);
  }

  getPost(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(`${this.url}/${id}`);
  }
  
  addComment(data: CreateCommentInterface): Observable<any> {
    const headers = this.createTokenHeader();
    return this.http.post<any>(this.urlComments, data, { headers });
  }

  deletePost(id: number): Observable<any> {
    const headers = this.createTokenHeader();
    return this.http.delete<any>(`${this.url}/${id}`, { headers });
  }

  editPost(id: number, data: EditPostInterface): Observable<any> {
    const headers = this.createTokenHeader();
    return this.http.put<any>(`${this.url}/${id}`, data, { headers });
  }
}
