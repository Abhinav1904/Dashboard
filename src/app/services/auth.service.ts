import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService{  
  [x: string]: any; 
   
    constructor( private router: Router,
                 private api: ApiService){}
   
   authUser(user: any): Observable<any>{
  return this.api.getUser()
       
        //}

    }
    login(user: User) {
        if (user.email !== '' && user.password !== '' ) {
          this.router.navigate(['/welcome']);
        }
      }
    
      logout() {
        this.router.navigate(['/login']);
      }
}