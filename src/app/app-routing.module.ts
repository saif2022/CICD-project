import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './app-layouts/public-layout/public-layout.component';
import { PublicHeaderComponent } from './app-layouts/public-header/public-header.component';
import { PublicFooterComponent } from './app-layouts/public-footer/public-footer.component';
import { PublicHomeComponent } from './app-layouts/public-home/public-home.component';

const routes: Routes = [
  
  {
    path: '',
    component: PublicHomeComponent,
    children: [
      { path: '', component: PublicHomeComponent },
      { path: '/', component: PublicHomeComponent },
      { path: 'index', component: PublicHomeComponent }
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      // { path: 'header', component: PublicHeaderComponent },
      // { path: 'footer', component: PublicFooterComponent },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },
      { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
      { path: 'apply', loadChildren: () => import('./apply/apply.module').then(m => m.ApplyModule) },
      { path: 'izaan', loadChildren: () => import('./policyandservice/policyandservice.module').then(m => m.PolicyandserviceModule) },
      { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
      
    ]
  },
  { path: '**', pathMatch: 'full',  component: PublicHomeComponent },
 
];

// https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change
// https://www.codegrepper.com/code-examples/javascript/on+page+change+page+start+from+top+in+angular

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  PublicLayoutComponent,
  PublicHeaderComponent,
  PublicFooterComponent,
  PublicHomeComponent
]