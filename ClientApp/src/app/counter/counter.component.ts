import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    

    
})
export class CounterComponent {
    title = 'My BMR Calculator';
    public num1: number;
    public num2: number;
    public num3: number;
    public num4: number;

    calculate(){
        this.num4 = this.num1 + this.num2 + this.num3;
    }

}
