import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicCourseListComponent } from './public-course-list/public-course-list.component';
import { PublicCourseDetailsComponent } from './public-course-details/public-course-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicDevopsDetailsComponent } from './public-devops-details/public-devops-details.component';
import { PublicQaaeDetailsComponent } from './public-qaae-details/public-qaae-details.component';
import { PublicDataanalistDetailsComponent } from './public-dataanalist-details/public-dataanalist-details.component';
import { PublicDevopsFreshersDetailsComponent } from './public-devops-freshers-details/public-devops-freshers-details.component';

const routes: Routes = [
  { path: '', component: PublicCourseListComponent },
  { path: 'courselist', component: PublicCourseListComponent },
  { path: 'details', component: PublicCourseDetailsComponent },
  { path: 'devOps', component: PublicDevopsDetailsComponent },
  { path: 'devopsforfresher', component: PublicDevopsFreshersDetailsComponent },
  { path: 'qaae', component: PublicQaaeDetailsComponent },
  { path: 'dataAnalyst', component: PublicDataanalistDetailsComponent },
];

@NgModule({
  declarations: [
    PublicCourseListComponent,
    PublicCourseDetailsComponent,
    PublicDevopsDetailsComponent,
    PublicQaaeDetailsComponent,
    PublicDataanalistDetailsComponent,
    PublicDevopsFreshersDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
