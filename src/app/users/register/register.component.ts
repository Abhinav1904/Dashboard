import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alretify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;
  constructor(private fb: FormBuilder ,
              private userService: UserServiceService,
              private alertify: AlertifyService,
              private api: ApiService) { }

  ngOnInit(){
    this.createRegisterationForm();
  }
  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required]
    },{ validators: this.passwordMatchingValidator});
}

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  onSubmit(){
    console.log(this.registerationForm.value)
    this.userSubmitted = true;
    
    if(this.registerationForm.valid){
    this.userService.addUser(this.userData());
    this.registerationForm.reset();
    this.userSubmitted = false;
    this.alertify.success('User added successfully');
    }
    else{
    this.alertify.error('Please fill all the fields');
    }
  }
  
   userData(): User{
     return this.user =  {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
   }
   }
  
  

  get firstName(){
    return this.registerationForm.get('firstName') as FormControl;
  }
  get lastName(){
    return this.registerationForm.get('lastName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  } 
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
}
