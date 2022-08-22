import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonService} from '../../services/common.service'
import { AffiliatorModel} from './affiliatorModel'
import * as moment from 'moment';

@Component({
  selector: 'app-become-affiliate',
  templateUrl: './become-affiliate.component.html',
  styleUrls: ['./become-affiliate.component.scss']
})
export class BecomeAffiliateComponent implements OnInit {
  
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {

  }

  ngOnInit(): void {
   
  }

}
