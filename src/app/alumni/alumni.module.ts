import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAlumniStoriesComponent } from './public-alumni-stories/public-alumni-stories.component';
import { HireOurGradsComponent } from './hire-our-grads/hire-our-grads.component';
import { StudentReviewsComponent } from './student-reviews/student-reviews.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StudentReviewsComponent },
  { path: 'alumnistories', component: PublicAlumniStoriesComponent },
  { path: 'hireourgrads', component: HireOurGradsComponent },
  { path: 'reviews', component: StudentReviewsComponent }
];
@NgModule({
  declarations: [
    PublicAlumniStoriesComponent,
    HireOurGradsComponent,
    StudentReviewsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AlumniModule { }
