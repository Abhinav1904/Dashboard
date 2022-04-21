import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../services/alretify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  constructor(private alertify: AlertifyService,  private router: Router,private authService: AuthService) { }

  ngOnInit(){
  
  }
  
  
 loggedIn(){
    return localStorage.getItem('token');
  } 

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You have logged out!');
    this.router.navigate(['/login']);
  }
}