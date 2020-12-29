import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReserveService } from 'src/services/reserve.service';

interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {

  reservation: FormGroup;
  startTime: FormControl;

  times: Time[] = [
    {value: '9am', viewValue: '9:00am'},
    {value: '10am', viewValue: '10:00am'}, 
    {value: '11am', viewValue: '11:00am'},
    {value: '12pm', viewValue: '12:00pm'},
    {value: '1pm', viewValue: '1:00pm'},
    {value: '2pm', viewValue: '2:00pm'},
    {value: '3pm', viewValue: '3:00pm'},
    {value: '4pm', viewValue: '4:00pm'},
    {value: '5pm', viewValue: '5:00pm'},
    {value: '6pm', viewValue: '6:00pm'},
    {value: '7pm', viewValue: '7:00pm'},
    {value: '8pm', viewValue: '8:00pm'},
    {value: '9pm', viewValue: '9:00pm'},
    {value: '10pm', viewValue: '10:00pm'},
  ];
  
  constructor(private reserveService: ReserveService) { }

  ngOnInit(): void {
    this.reservation = new FormGroup({
      date: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      partySize: new FormControl()
    })
  }

  dateSelected(event) {
    let formattedDate = event.toLocalDateString();
    this.reservation.get('date').setValue(formattedDate);
  }

  setName(event) {
    this.reservation.get('name').setValue(event);
  }

  setEmail(event) {
    this.reservation.get('email').setValue(event);
  }

  setPartySize(event) {
    this.reservation.get('partySize').setValue(event);
  }

  submitForm() {
    console.log(this.reservation.value);
    this.reserveService.setReservation(this.reservation.value);
    localStorage.setItem('reservation', JSON.stringify(this.reservation.value));
  }

}
