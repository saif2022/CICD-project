import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonService} from '../../services/common.service'
import * as moment from 'moment';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent implements OnInit {
  public newsletterForm: FormGroup;
  editmode = true;
   message='';
   _messageDiv='';
  @ViewChild("buttonSubscribe") buttonSubscribe: ElementRef;
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {

  }

  ngOnInit(): void {
    this.newsletterForm = this._fb.group({
      email: ['', [Validators.required]],
     
    });
  }


}
