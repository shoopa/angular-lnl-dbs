import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScheduleComponent} from './schedule/schedule.component';
import {ReservationComponent} from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/schedule', pathMatch: 'full'},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'reservations', component: ReservationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
