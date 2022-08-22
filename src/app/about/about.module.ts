import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { CareersComponent } from './careers/careers.component';
import { BecomeAffiliateComponent } from './become-affiliate/become-affiliate.component';
import { RouterModule, Routes } from '@angular/router';
import { TutionandfinancingComponent } from './tutionandfinancing/tutionandfinancing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'becomeaffiliate', component: BecomeAffiliateComponent },
  { path: 'tuitionandfinancing', component: TutionandfinancingComponent },
  { path: 'contactus', component: ContactUsComponent },

];

@NgModule({
  declarations: [
    AboutUsComponent,
    FaqComponent,
    CareersComponent,
    BecomeAffiliateComponent,
    TutionandfinancingComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
