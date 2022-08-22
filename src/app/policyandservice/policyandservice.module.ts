import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsofserviceComponent } from './termsofservice/termsofservice.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TermsofserviceComponent },
  { path: 'Termsofservice', component: TermsofserviceComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'regulatory', component: RegulatoryComponent },
 
];


@NgModule({
  declarations: [
    TermsofserviceComponent,
    PrivacypolicyComponent,
    AccessibilityComponent,
    RegulatoryComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PolicyandserviceModule { }
