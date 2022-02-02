import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from '../models/student';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BASE_URL: string = 'http://localhost:8080/students/create'

  constructor( private http: HttpClient ) { }

  createStudent( student: Student ): Observable<Response> {
    return this.http.post<Response>(this.BASE_URL,student);
  }
}
