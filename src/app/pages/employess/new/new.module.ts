import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { EmployeesFormModule } from 'src/app/components/employees-form/employees-form.module';


@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    EmployeesFormModule
  ]
})
export class NewModule { }