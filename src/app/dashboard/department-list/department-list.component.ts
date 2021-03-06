import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alretify.service';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeModel } from 'src/app/model/employee.model'; 
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  searchValue!: string;
  firstNamee: any;
  employeeData!: EmployeeModel[];
  p: number = 1;
  pageSize!:number
  hello!:number
  //dept:any
  department1 = ''
  constructor(private api: ApiService,
    private alertify: AlertifyService) {}

  ngOnInit() {
    this.getAllDepartment(); 
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.api.getDepartment().subscribe(res => {
      this.employeeData = res;
    })
  }

    deleteDepartment(row: any) {
     
  this.api.getEmployee().pipe(
  )
  .subscribe(res=>{
    this.department1 = res.map( (x: { department: any; }) => x.department)
    console.log(res)
    console.log(this.department1)
    if(this.department1.includes(row.department)){
      this.alertify.error("Department cannot be deleted ");
    }
    else{
      this.api.deleteDepartment(row.id).subscribe(res => {
        this.alertify.success("Department deleted successfully");
        this.getAllDepartment();
      });
    }
  })
    
    
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

  chooseValue(event:any){
     this.hello = event.target.value
      this.pageSize=this.hello
  } 
}

