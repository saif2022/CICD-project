import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import {CommonService} from './services/common.service'
import { AdminDashboardLayoutComponent } from './app-layouts/admin-dashboard-layout/admin-dashboard-layout.component';
// facebook module
import { FacebookModule } from 'ngx-facebook';

// share button
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';



@NgModule({
  declarations: [
    AppComponent,RoutingComponents, AdminDashboardLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FacebookModule.forRoot(),
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgSelectModule,

    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule

  ],
  providers: [DataService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
