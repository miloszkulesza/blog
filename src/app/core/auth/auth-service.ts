import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginInterface } from "../interface/login.interface";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { ResponseAuth } from "../interface/response-auth.interface";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    url = 'http://localhost:8080/api/';
    private userLogin$ = new BehaviorSubject<string>(null);
    private isLogged$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {

    }

    login(data: LoginInterface): Observable<ResponseAuth> {
        return this.http.post<any>(`${this.url}authentication`, data).pipe(tap(res => {
            this.userLogin$.next(res.claims.login);
            this.isLogged$.next(true);
        }));
    }

    get UserInfo(): string {
        return this.userLogin$.getValue();
    }

    get IsLogged(): Observable<boolean> {
        return this.isLogged$.asObservable();
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        this.userLogin$.next('');
        this.isLogged$.next(false);
    }
}