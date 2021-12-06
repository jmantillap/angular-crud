import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { EmployeesFormModule } from 'src/app/components/employees-form/employees-form.module';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    EmployeesFormModule
  ]
})
export class EditModule { }