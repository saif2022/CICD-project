import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  
];

@NgModule({
  declarations: [
    ApplicationFormComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplyModule { }
