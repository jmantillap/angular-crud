import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees$ = this._serviceEmployees.employees$;
  navigationExtras: NavigationExtras = {
    state: {
      value: {}
    }
  }


  constructor(private _serviceEmployees: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  edit(item: IEmployee) {
    this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  view(item: IEmployee) {
    this.navigationExtras.state = item;
    this.router.navigate(['details'], this.navigationExtras)
  }

  async delete(id: any) {
    try {
      await this._serviceEmployees.onDeleteEmployees(id);
      alert('Delete');
    } catch (error) {
      console.log(error)
    }
  }
}