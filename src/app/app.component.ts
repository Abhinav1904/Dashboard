import { Component , NgZone, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  isLoggedin = false;
  showHead: boolean = false;
  login: boolean = false;
  constructor(public router: Router){}


  ngOnInit() {

  }

}
