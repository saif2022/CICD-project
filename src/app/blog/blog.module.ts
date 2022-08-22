import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicBlogListComponent } from './public-blog-list/public-blog-list.component';
import { PublicBlogDetailsComponent } from './public-blog-details/public-blog-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PublicBlogListComponent },
  { path: 'bloglist', component: PublicBlogListComponent },
  { path: 'details', component: PublicBlogDetailsComponent },
];

@NgModule({
  declarations: [
    PublicBlogListComponent,
    PublicBlogDetailsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
