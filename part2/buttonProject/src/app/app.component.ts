import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buttonProject';
  buttonColor = 'grey';

  toggleColor() {
    this.buttonColor = this.buttonColor === 'grey' ? 'red' : 'grey'
  }
}
