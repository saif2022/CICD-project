import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonService} from '../../services/common.service'
import { Applynowmodel } from '../applynowModel';
import * as moment from 'moment';
import { Title, Meta } from '@angular/platform-browser';  


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  public applyForm: FormGroup;
  applynowmodel : Applynowmodel
  emailmessage ='Email needs to be correct format!'
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
    ,private titleService: Title,  
    private metaTagService: Meta 
  ) {

  }

  
  ngOnInit(): void {
  
  }
}
