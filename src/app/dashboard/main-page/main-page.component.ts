import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
