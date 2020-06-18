
import { Component, Inject, OnInit } from '@angular/core';
import { Person } from '../interfaces/Person';
import { PersonService } from '../services/person.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
    public person: Person[];

    constructor(private personService: PersonService) {

    }
    async ngOnInit() {
        this.person = await this.personService.getPerson();
    }
}

