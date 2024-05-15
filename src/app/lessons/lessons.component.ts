import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent {
  fruits = [`olma`, `Anor`, `Anjir`]
  
  cars = [
    new car(`nexia`, 50000),
    new car (`damas`, 1000)
  ]

  matn:string = "salom baxor hush kelding"

}

class car{
  mode:string;
  price:number;
  constructor(mode:string, price:number){
    this.mode = mode;
    this.price = price;
  }
}

