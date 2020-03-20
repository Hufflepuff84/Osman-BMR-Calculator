
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
    public persons: Person[];
    public newPerson: Person = {Gender:'',Age:0, Weight:0, Height:0};

    public bmr: number;


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    async ngOnInit() {
        

        //this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    }
    //async save() {
       // await this.http.post<Person[]>(this.baseUrl + 'person', this.newPerson).toPromise();
        //this.newPerson = {Age:0, Weight:0, Height:0};
        //this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    //}


}

//console.log ("Please enter your gender");
//var gender = console.log("Please enter your gender");
//console.log ("Please enter your weight in kilograms");
//var weight = console.log ("Please enter your weight in kilograms");
//console.log ("Please enter your height in centimeters");
//var height = console.log ("Please enter your height in centimeters");
//console.log ("Please enter your age");
//var age = console.log ("Please enter your age");


// var bmr = 66 + (13.8 * Weight)  + (5 * height) - (6.8 * age);

interface Person {
  //Id: number;
  Gender: string;
  Age: number;
  Weight: number;
  Height: number;
}
