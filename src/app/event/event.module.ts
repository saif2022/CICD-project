import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'details', component: EventDetailsComponent }
];


@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class EventModule { }
