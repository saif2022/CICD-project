import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RoutesRecognized,NavigationExtras } from '@angular/router';
import { BlogList } from '../blogsMockData';
import { Title, Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-public-blog-details',
  templateUrl: './public-blog-details.component.html',
  styleUrls: ['./public-blog-details.component.scss']
})
export class PublicBlogDetailsComponent implements OnInit {


  defaultData: any;
  blog:any;
  constructor(private router: Router,private params: ActivatedRoute,private titleService: Title,  
    private metaTagService: Meta) {

  }
  ngOnInit(): void {

    this.params.queryParams.subscribe(paramss => {
      let blogId =paramss['blogId'];
      //this.blog = this.blogList[0];
      this.setMetadata();
    });
  }
  setMetadata(){
    if(this.blog!=null){
        this.titleService.setTitle(this.blog.title);  
      // this.metaTagService.removeTag('og:url');
      //   this.metaTagService.removeTag('og:image');
  
        this.metaTagService.addTags([  
          { name: 'keywords', content: 'Izaan School of Engineering, Izaan, izaan.io, Jahidul Isalm, Izaan Tech, DevOps,QAAE,Data Science,events,event,all events,event Details' }, 
          { property: 'og:url', content: ''},  
          { property: 'og:image', content: this.blog.imgPath },
          { property: 'og:description', content:this.blog.description},    
          
        ]);  
    }
  }

}
