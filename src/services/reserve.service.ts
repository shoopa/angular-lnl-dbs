import { Injectable } from '@angular/core';

export interface Reservation {
  date: string,
  startTime: string;
  endTime: string;
  name: string;
  email: string;
  partySize: number;
}

@Injectable({
  providedIn: 'root'
})

export class ReserveService {

  reservationList = [];

  constructor() { }

  setReservation(reservation): void {
    const reservationData:Reservation = {
      date: reservation.date,
      startTime:reservation.startTime,
      endTime: reservation.endTime,
      name: reservation.name,
      email: reservation.email,
      partySize: reservation.partySize,
    }
    this.reservationList.push(reservationData);
  }

  getReservation() {
    return this.reservationList;
  }
}
