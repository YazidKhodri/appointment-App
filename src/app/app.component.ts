import { Component } from '@angular/core';
import { Appointment } from './models/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appointments: Appointment[] = []
}
