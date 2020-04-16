import { Component } from '@angular/core';
import {Studentform} from '../studentform';
import {StudentserviceService } from './studentservice-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationForm';

  Subjects = ['Computer', 'Mathematics', 'English'];

  constructor(private studentser: StudentserviceService)
  {
 
  }
studentforms = new Studentform("", "", "", "", "", "", true);

onSubmit()
{
  //console.log(this.studentforms);
  this.studentser.enroll(this.studentforms)
  .subscribe(
    data => console.log("Successful", data),
   error => console.log("Error", error)
  )
}

}
