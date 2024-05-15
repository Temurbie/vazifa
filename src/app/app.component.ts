import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { Dars5Component } from './dars5/dars5.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LessonsComponent, Dars5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sdsd';
}
