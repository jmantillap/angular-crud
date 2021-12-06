import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesFormComponent } from './employees-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmployeesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EmployeesFormComponent
  ]
})
export class EmployeesFormModule { }