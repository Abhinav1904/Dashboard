import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class UserServiceService{
  [x: string]: any;
   userData!: User[]; 
    
   
    constructor(private api:  ApiService){}

    addUser(user: User){
      this.api.postUser(user).subscribe(data => {
               //this.getAllUser();
      })
      // this.userData = this.getAllUser();
      // if(user?.email){
      //   console.log(JSON.stringify(user))
      //   // Get all the user using the get user api
      //   // Check whether the email id exist or not in the user array, 
      //   //   if exist don’t call post user then check password is matching or not
      //   //   Else call post user with user data
      //   this.api.getUser().subscribe(res => {
      //    this.userData = res;
      //   })
      //   }
      //   else{
      //     this.api.postUser(user).subscribe(data => {
      //       this.getAllUser();
      //     })
      //   }

        }
}   