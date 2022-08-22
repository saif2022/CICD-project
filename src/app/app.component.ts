import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'izaanapp';
  constructor(private facebookService: FacebookService) { }
  ngOnInit(): void {
    console.log("facebook init: v0001")
    this.initFacebookService();
  }
  // facebook init
  private initFacebookService(): void {
    console.log("facebook: v0001")
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }

  // share button
  name = 'ngx sharebuttons';
}
