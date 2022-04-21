import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alretify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    ){}

  ngOnInit() {

  }

  onLogin (loginForm: NgForm){
   console.log(loginForm.value); 
    let userArray: any[] = [];
      this.authService.authUser(loginForm.value).subscribe(res => {
          userArray = res;
          console.log(userArray);
          const token =  userArray.find(  (p) => 
          p.email === loginForm.value.email && 
          p.password === loginForm.value.password
  )
  if(token){
    localStorage.setItem('token',token.email);
    this.alertify.success('Login Successful');
    this.router.navigateByUrl('/welcome')
  }
  else{
    this.alertify.error('User id or password is wrong');
  }
        });
   
  }

  onLoginClick() {
    this.onLogin;

  }

}
