import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  employee = {} as IEmployee;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private _serviceEmployees: EmployeesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = { ...navigation?.extras?.state } as IEmployee;
    console.log(this.employee);
  }

  ngOnInit(): void {
    if (Object.entries(this.employee).length === 0) {
      this.router.navigate(['/list']);
    } 
  }

}
