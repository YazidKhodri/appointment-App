import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  public ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments')
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  public addAppointment() {
    if (this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);
    }
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
  deleteAppointments(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
}
