import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import {CommonService} from '../../services/common.service'
import { EventModel} from '../eventModel'
import * as moment from 'moment';
import { Title, Meta } from '@angular/platform-browser';  


import { DataService } from '../../services/data.service';
// import { Event } from '../../dataModel/event';
import { Router, ActivatedRoute, Params, RoutesRecognized,NavigationExtras } from '@angular/router';
import { EventList } from '../EventMockData';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventModel:EventModel;
  public eventForm: FormGroup;
  
 
  isEmptyPhone= false;
  hasError= false;
  submitReturnMessage=''

  eventList=EventList;
  defaultData: any;
  event:any;
  hasEventLink=false;
  constructor(private router: Router,private _fb: FormBuilder,private params: ActivatedRoute, private data: DataService,private commonService: CommonService,private titleService: Title,  
    private metaTagService: Meta) {

  }

  mode = 'apply';
  ngOnInit(): void {
    this.eventForm = this._fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      anyquestions: [''],
     
    });
  

    this.params.queryParams.subscribe(paramss => {
      let eventId =paramss['eventId'];
      // this.quizName = this.defaultData;
      this.event = this.eventList[0];
      this.hasEventLink=this.event.isBookEventStart;
      this.setEventMetadata();
      
    });

  }
  setEventMetadata(){
    if(this.event!=null){
        this.titleService.setTitle(this.event.title);  
      // this.metaTagService.removeTag('og:url');
      //   this.metaTagService.removeTag('og:image');
  
        this.metaTagService.addTags([  
          { name: 'keywords', content: 'Izaan School of Engineering, Izaan, izaan.io, Jahidul Isalm, Izaan Tech, DevOps,QAAE,Data Science,events,event,all events,event Details' }, 
          { property: 'og:url', content: 'https://www.izaanschool.com/event/details?eventId=In-Campus-Tech-Career-Meetup-at-Izaan-School'},  
          { property: 'og:image', content: this.event.imgPath },
          { property: 'og:description', content:this.event.description},    
          
        ]);  
    }
  }

 

  bookNow(){
  
  }

  smothScroling(){
   
  }


  validateEmail(email:any) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regularExpression.test(String(email).toLowerCase()))
    return regularExpression.test(String(email).toLowerCase());
  }



}
