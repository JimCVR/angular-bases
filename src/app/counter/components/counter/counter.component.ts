import { Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Counter {{counter}}</h3>
  <button (click)="increaseByOne(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseByOne(-1)">-1</button>`
})

export class CounterComponent {
  counter = 10;

  increaseByOne(value:number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10
  }
}
