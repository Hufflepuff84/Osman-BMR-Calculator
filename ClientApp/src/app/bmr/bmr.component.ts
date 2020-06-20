import { Component, Inject, OnInit, } from '@angular/core';
import { bmr } from '../interfaces/bmr';
import { PersonService } from '../services/person.service';
@Component({
    selector: 'app-bmr',
    templateUrl: './bmr.component.html'
})
export class BmrComponent implements OnInit {
    public bmr: bmr[];
    public newBmr: bmr = { Age: 0, Weight: 0, Height: 0 };
    public result: number;
    public name: string;

    public get Name(): string {
        return this.name;
    }

    constructor(private personService: PersonService) {

    }

    async ngOnInit() {

    }
    async save() {
        await this.personService.addPerson(
            {
                name: this.name,
                age: this.newBmr.Age,
                weight: Math.floor(this.newBmr.Weight),
                height: Math.floor(this.newBmr.Height),
                created: new Date(),
                bmr: Math.floor(this.result)
            }
        );
    }

    calculate() {
        console.log(this.newBmr);
        const result = (this.newBmr.Weight * 10) + (this.newBmr.Height * 6.25) - (this.newBmr.Age * 5) + 5;
        console.log('Your BMR is ' + result);
        this.result = result;
    }


}
