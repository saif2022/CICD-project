import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../../services/data.service';
import { EventList } from '../EventMockData';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

   constructor(private router: Router, private data: DataService,private titleService: Title,  
    private metaTagService: Meta  ) {

   }
   
   eventList=EventList;
   ngOnInit(): void {

      this.titleService.setTitle("Events of Izaan School");  
    
      // this.metaTagService.addTags([  
      //   { name: 'keywords', content: 'Izaan School of Engineering, Izaan, izaan.io, Jahidul Isalm, Izaan Tech, DevOps,QAAE,Data Science,events,event,all events,event list' }, 
      //   { property: 'og:url', content: 'https://dev-amran.d14s3ob69kaiq0.amplifyapp.com/event/eventlist'},  
      //   { property: 'og:image', content: 'https://dev-amran.d14s3ob69kaiq0.amplifyapp.com/assets/img/photos/photo-17.jpg'},  
        
      // ]);  
      this.metaTagService.updateTag({ property: 'og:url', content: 'https://www.izaanschool.com/event/eventlist'})
      this.metaTagService.updateTag({ property: 'og:image', content: 'https://www.izaanschool.com/assets/img/photos/photo-17.jpg'})
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

}
