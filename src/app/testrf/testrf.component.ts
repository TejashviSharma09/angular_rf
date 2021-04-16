import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testrf',
  templateUrl: './testrf.component.html',
  styleUrls: ['./testrf.component.css']
})
export class TestrfComponent  {

 StudentName = new FormControl('');

 updateStudentName(){
   this.StudentName.setValue('HumptyHump');
 }

studentForm = new FormGroup({
  Name: new FormControl(''),
  University: new FormControl(''), 

});

onSubmit(){
  console.log(this.studentForm.value);
}

}
