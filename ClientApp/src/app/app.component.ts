import { Component, OnInit } from '@angular/core';
import {Person} from '../app/interfaces/person';
// import { ɵPLATFORM_BROWSER_ID } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})


export class AppComponent implements OnInit {
  title = 'ClientApp';
  displayedColumns: string[] = ['id','name', 'age', 'weight', 'height', 'bmr'];
  
 dataSource;
 PERSON_DATA: Person[] = [
  {id: 1,  name: 'Mary Wells',  age: 29, weight: 210, height: 23, bmr: 1800 },
  {id: 2,  name: 'Larry Welder',      age: 33, weight: 157, height: 33, bmr: 2000 },
  {id: 3,  name: 'Bob Oneal', age: 45, weight: 178, height: 34, bmr: 2000 },
  {id: 4,  name: 'Lenny Baker',   age: 25, weight: 315, height: 41, bmr: 2000 },
  {id: 5,  name: 'Tony Watson',     age: 51, weight: 222, height: 9, bmr: 2000 },
  {id: 6,  name: 'Jerry Smith', age: 23, weight: 135, height: 34, bmr: 2000 },
  {id: 7,  name: 'Hannah Davis',      age: 76, weight: 199, height: 40, bmr: 2000 },
  {id: 8,  name: 'James Madson',  age: 37, weight: 298, height: 1, bmr: 2000 },
  {id: 9,  name: 'Daniel Berinky', age: 28, weight: 155, height: 11, bmr: 2000 },
  {id: 10, name: 'Shirley Adams',   age: 88, weight: 175, height: 32, bmr: 2000 },
  {id: 11, name: 'Richard Paulson',    age: 62, weight: 330, height: 4, bmr: 2000 },
  {id: 12, name: 'Fred Blake',     age: 58, weight: 180, height: 12, bmr: 2000 },

];
ngOnInit(){

  this.dataSource = this.PERSON_DATA;
  console.log(this.dataSource);
}
  


}
