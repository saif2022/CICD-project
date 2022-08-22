import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampusComponent } from './campus/campus.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: CampusComponent },

];

@NgModule({
  declarations: [
    CampusComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryModule { }
