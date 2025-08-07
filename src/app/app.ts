import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Header } from "./features/shared/presentation/components/header/header";
import { Footer } from "./features/shared/presentation/components/footer/footer";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-comm');
}
