import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./core/auth/auth-service";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router,
        private toastr: ToastrService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.IsLogged.pipe(map(isAuth => {
            if (!isAuth) {
                this.toastr.error('Nie masz uprawnień do tej strony. Proszę, zaloguj się.', 'Brak uprawnień');
                this.router.navigate(['login'])
                return false;
            } else {
                return true;
            }
        }))
    }

}