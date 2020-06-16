
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../interfaces/Person';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
    public persons: Person[];
    public newPerson: Person = {id:0, name:'', age:0, height:0, weight:0, bmr:0};

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }
    async ngOnInit() {
        this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    }
    async save() {
        await this.http.post<Person[]>(this.baseUrl + 'person', this.newPerson).toPromise();
        this.newPerson = { id:0 ,name:'',age:0,weight:0,height:0,bmr:0 };
        this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    }


}

