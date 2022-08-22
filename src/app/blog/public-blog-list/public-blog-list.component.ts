import { Component, OnInit } from '@angular/core';
import { Blog} from '../../dataModel/blog';
import { BlogList } from '../blogsMockData';
import { Router, NavigationExtras } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-public-blog-list',
  templateUrl: './public-blog-list.component.html',
  styleUrls: ['./public-blog-list.component.scss']
})
export class PublicBlogListComponent implements OnInit {
  constructor(private router: Router,private titleService: Title,  
    private metaTagService: Meta) { }
  isShow=false;
  ngOnInit(): void {
    this.titleService.setTitle("Blogs- Izaan School of Engineering");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Izaan School of Engineering,Izaan School, Izaan, izaan.io, Jahidul Isalm, Izaan Tech, DevOps,QAAE,Data Science,events,event,all events,event list,bloglist,blogs' },
      { name: 'description', content: 'Our School is purpose-oriented, committed and focused on providing ideal services and assisting individuals goals.' }, 
      { property: 'og:type', content:"website"},  
      { property: 'og:title', content:"Blogs of Izaan School of Engineering"},  
      { property: 'og:description', content:"Our School is purpose-oriented, committed and focused on providing ideal services and assisting individuals goals."},  
      { property: 'og:url', content: 'https://www.izaanschool.com/blog/bloglist'},  
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}, 
        
    ]);  

    this.setMetadata();
  }
  setMetadata(){
        this.titleService.setTitle("List of Blogs");  
  }
  blogDetails(event:any){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "blogId": event.id
        }
      };

      this.router.navigate(["/blog/details"],navigationExtras);
  }

}
