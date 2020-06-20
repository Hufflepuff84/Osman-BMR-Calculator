import { Component, Inject, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {bmr} from '../interfaces/bmr'
@Component({
    selector: 'app-bmr',
    templateUrl: './bmr.component.html'
})
export class bmrComponent implements OnInit {
    public bmr: bmr[];
    public newBmr: bmr = {Age: 0, Weight: 0, Height: 0};
    public result: number;
    public name: string;

    public get Name(): string {
        return this.name;
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }
    async ngOnInit() {
     //   this.bmr = await this.http.get<bmr[]>(this.baseUrl + 'bmr').toPromise();
    }
    async save() {
        await this.http.post<bmr[]>(this.baseUrl + 'bmr', this.newBmr).toPromise();
        this.newBmr = { Age:0, Weight:0, Height:0 };
        this.bmr = await this.http.get<bmr[]>(this.baseUrl + 'bmr').toPromise();
    }
     calculate() {
        console.log(this.newBmr);
        const result = (this.newBmr.Weight * 10) + (this.newBmr.Height * 6.25) - (this.newBmr.Age * 5) + 5;
        console.log ('Your BMR is ' + result);
        this.result = result;
    }


}
