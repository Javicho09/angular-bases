import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  //get es una propiedad omejor dicho un metodo
  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  getHeroDescripton(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name ='Spiderman'

  }

  changeAge(): void{
    this.age = 25;
    }

    resetForm(): void {
      this.name = 'iroman';
      this.age = 45;
    }
}
