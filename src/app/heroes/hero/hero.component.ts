import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: String = 'ironman';
  age: number = 45;


  get capitalizedName():String {
    return this.name.toUpperCase()
  }

  getHeroDescription(): String {
    return `${this.name} - ${this.age}`
  }

  changeHero(name: String):void{
    this.name = name
  }

  changeAge(age: number):void{
    this.age = age
  }

  resetForm(){
    this.name = 'ironman'
    this.age = 45
  }

}
