import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-dashboard-layout',
  templateUrl: './admin-dashboard-layout.component.html',
  styleUrls: ['./admin-dashboard-layout.component.scss']
})
export class AdminDashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.ui.dropdown').click();
  }

}
