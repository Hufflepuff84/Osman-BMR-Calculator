import { Component, Inject, OnInit, } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-bmr',
    templateUrl: './bmr.component.html'
})
export class bmrComponent implements OnInit {
    public bmr: bmr[];
    public newBmr: bmr = {Age:0, Weight:0, Height:0};
    result;

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
        let result = this.newBmr.Age + this.newBmr.Weight + this.newBmr.Height;
        console.log ("Your BMR is" + result);
        this.result = result;
        
    }


}



interface bmr {
    Age: number;
    Weight: number;
    Height: number;
}