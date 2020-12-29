import { Component, OnInit } from '@angular/core';
import { Reservation, ReserveService } from 'src/services/reserve.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  readonly displayedColumns: string[] = [
    'date',
    'startTime',
    'endTime',
    'name',
    'email',
    'partySize'
  ];
  dataSource: Reservation[];

  constructor(private reserveService: ReserveService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.dataSource = this.reserveService.getReservation();
    console.log(this.reserveService.getReservation());
  }
}
