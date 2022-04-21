// import { EmployeeModel } from "../model/employee.model";
// import { Pipe , PipeTransform } from "@angular/core";

// @Pipe({
//     name: "serachFilter"
// })
// export class EmployeeListPipe implements PipeTransform {
//     transform(employeeModel: EmployeeModel[], searchValue: string): EmployeeModel[] {
//         if (!employeeModel || !searchValue) {
//             return employeeModel;
//         }
//         return employeeModel.filter(employee => 
//             employee.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
//     }
// }