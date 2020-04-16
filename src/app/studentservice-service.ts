import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Studentform } from '../studentform';

@Injectable({
    providedIn: 'root'
  })

export class StudentserviceService {

    url : any = 'http://localhost:8081/v1/register ';

    constructor(private http : HttpClient){ }
     
    enroll(student: Studentform ){
        return this.http.post<any>(this.url, student)
     
      

    }

}
