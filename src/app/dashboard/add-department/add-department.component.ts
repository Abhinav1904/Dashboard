import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alretify.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { ApiService } from 'src/app/services/api.service';
import { UniqueUsernameValidator } from 'src/app/shared/unique-username-validator.directive';

 import  *  as  db  from  'src/db.json';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  [x: string]: any;

  formvalue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  data: any
  userSubmitted!: boolean
  hello = false
  i: any
  department1 =  ''
  constructor(
    private formbuilder: FormBuilder,
    private alertify: AlertifyService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.checkingDepartment();
    this.addDepartmentValidator();
  }

  addDepartmentValidator() {
    this.formvalue = this.formbuilder.group({
      department: ['',
        null,
        UniqueUsernameValidator(this.api)],
    });
  }

  postDepartmentDetails() {
    this.employeeModelObj.department = this.formvalue.value.department;

    this.api.postDepartment(this.employeeModelObj).subscribe(
      data => {
        this.alertify.success('Department added successfully');
        this.getAllEmployees();
      },
      err => {
        console.log(err);
        this.alertify.error('something went wrong');
      }
    );
  }

  checkingDepartment(){
  
  const hello = 
  this.api.getEmployee().pipe(
  )
  .subscribe(res=>{
    this.department1 = res.map( (x: { department: any; }) => x.department)
    console.log(res)
    console.log(this.department1)
  })
  }

  get department() {
    return this.formvalue.get('department');
  }

}



