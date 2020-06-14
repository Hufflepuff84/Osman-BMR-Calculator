
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
    public persons: Person[];
    public newPerson: Person = {firstName:'', lastName: ''};

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }
    async ngOnInit() {
        this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    }
    async save() {
        await this.http.post<Person[]>(this.baseUrl + 'person', this.newPerson).toPromise();
        this.newPerson = { firstName: '', lastName: '' };
        this.persons = await this.http.get<Person[]>(this.baseUrl + 'person').toPromise();
    }


}

interface Person {
    firstName: string;
    lastName: string;
}