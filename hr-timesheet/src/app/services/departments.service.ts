import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments: Department[] = [
    {id: '1', name: 'Customer Success'},
    {id: '2', name: 'Sales'},
    {id: '3', name: 'Finance'},
  ];
  constructor(
    private http: HttpClient
  ) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`);

  }
}
