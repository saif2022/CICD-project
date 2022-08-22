import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { EventList } from 'src/app/event/EventMockData';
import { BlogList } from 'src/app/blog/blogsMockData';
import {StudentReviewList} from  '../../dataModel/studentReviews'
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder,Validators } from '@angular/forms';
import {CommonService} from '../../services/common.service'
import * as moment from 'moment';
import { Title, Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})

export class PublicHomeComponent implements OnInit {
  @ViewChild("navigationClose") navigationClose: ElementRef;
  public newsletterForm: FormGroup;
  editmode = true;
   message='';
   _messageDiv='';
  @ViewChild("buttonSubscribe") buttonSubscribe: ElementRef;

  constructor(private _fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,private titleService: Title,  
    private metaTagService: Meta) { }
    eventList=EventList;
    blogList=BlogList;
    studentReviewList=StudentReviewList;
    ngOnInit(): void {
      this.titleService.setTitle("Home- Izaan School of Engineering");  
    
      this.metaTagService.addTags([  
        { name: 'keywords', content: 'Izaan School of Engineering, Izaan, izaan.io, Jahidul Isalm, Izaan Tech, DevOps,QAAE,Data Science,events,event,all events,event list' }, 
        { property: 'og:type', content:"website"},  
        { property: 'og:title', content:"Izaan School Online & In Campus | AWS | DevOps | QAAE | Cloud Engineering Training"},  
        { property: 'og:description', content:"Our School is purpose-oriented, committed and focused on providing ideal services and assisting individuals goals."},  
        { property: 'og:url', content: 'https://www.izaanschool.com/apply/applicationform'},  
        { property: 'og:image', content: 'assets/img/campus/campus.png'}
          
      ]);  
      // https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      this.newsletterForm = this._fb.group({
        email: ['', [Validators.required]],
      });
    }

  eventDetails(event:any){
    //  this.data.changeData(JSON.stringify(event.id));
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "eventId": event.id
        }
      };

      this.router.navigate(["/event/details"],navigationExtras);
  }

  blogDetails(event:any){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "blogId": event.id
        }
      };

      this.router.navigate(["/blog/details"],navigationExtras);
  }


    routeLink(path:any):void{

      this.navigationClose.nativeElement.classList.remove('show');
      let _path=path
      this.router.navigate([_path]);
    }

    hideNavDiv():void{

      this.navigationClose.nativeElement.classList.remove('show');

    }


  btnSubscribe(){

  }

    validateEmail(email:any) {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(regularExpression.test(String(email).toLowerCase()))
      return regularExpression.test(String(email).toLowerCase());
     }

     clearMessage(){
      this._messageDiv ='';
      this.message='';
     }


}
