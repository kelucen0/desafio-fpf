import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumbersFormComponent } from './numbers-form/numbers-form.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumbersFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-dos-numeros';
}
