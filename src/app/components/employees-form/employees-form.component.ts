import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  employee = {} as IEmployee;
  employeeForm: FormGroup = new FormGroup({});
  navigationExtras: NavigationExtras = {
    state: {
      value: {}
    }
  }

  private isEmail = /\S+@\S+\.\S+/;
  constructor(private formBuilder: FormBuilder, private router: Router,private _serviceEmployees: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = { ...navigation?.extras?.state } as IEmployee;
    this.initForm();
  }

  ngOnInit(): void {    
    //debugger;
    if (Object.entries(this.employee).length === 0) {
      this.router.navigate(['/new']);
    } else {      
      this.employeeForm.patchValue(this.employee);
    }
  }

  isValidField(field: string): string {
    const validatedField = this.employeeForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  private initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    })
  }

  async onSave() {
    if(this.employee.id!=null ){
        console.log('Actualizar');
        let id:string=this.employee.id;
        this.employee= this.employeeForm.value  
        this.employee.id=id;
        let resultado = await this._serviceEmployees.onSaveEmployees(this.employee);
        this.employee=resultado;
    }else{
       console.log('Nuevo');
       this.employee= this.employeeForm.value
       let resultado = await this._serviceEmployees.onSaveEmployees(this.employee);
       this.navigationExtras.state = resultado;
       this.employee=resultado;
       //this.router.navigate(['edit'], this.navigationExtras)
       this.router.navigate(['list']);

    }    
    //console.log(resultado);
    
  }
}