import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from "../interfaces/employee.interface";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees$: Observable<IEmployee[]> = new Observable();

  private employeesCollection: AngularFirestoreCollection<IEmployee>;

  constructor(private firestore: AngularFirestore) {
    this.employeesCollection = firestore.collection<IEmployee>('employees');
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employees$ = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(elem => { return { id: elem.payload.doc.id, ...elem.payload.doc.data() } as IEmployee }))
    )
  }

  onDeleteEmployees(employeeId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(employeeId).delete();
        resolve(result)
      } catch (error: any) {
        reject(error.message)
      }
    });
  }

  onSaveEmployees(employee:IEmployee):Promise<IEmployee>{
    return new Promise(async (resolve, reject) => {
      try {
        let result: any= null ;
        if(employee.id==null){
           employee.id =this.firestore.createId();
           result=this.firestore.collection('employees').add(employee);          
        }else{
           result= this.firestore.collection('employees').doc(employee.id).set(employee);
        }                
        resolve(employee)
      } catch (error: any) {
        reject(error.message)
      }
    });

  }
}