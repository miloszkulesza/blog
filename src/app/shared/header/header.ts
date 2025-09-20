import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {

  }

  logout(): void {
    this.authService.logout();
    this.toastr.info('Jesteś wylogowany', 'Wylogowanie');
    this.router.navigate(['/login']);
  }
}
