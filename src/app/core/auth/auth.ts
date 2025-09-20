import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormInterface } from '../interface/login-form.interface';
import { AuthService } from './auth-service';
import { LoginInterface } from '../interface/login.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})

export class Auth implements OnInit {
  loginForm: FormGroup<LoginFormInterface>;

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = new FormGroup<LoginFormInterface>({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const data: LoginInterface = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    this.authService.login(data).subscribe(res => {
      localStorage.setItem('token', res.tokenValue);
      localStorage.setItem('login', res.claims.login);
      this.toastr.success('Zalogowałeś się.', 'Logowanie');
      this.router.navigate(['/blog']);
    })
  }
}
