import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  @ViewChild("navigationClose") navigationClose: ElementRef;
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  routeLink(path:any):void{
    
    this.navigationClose.nativeElement.classList.remove('show');
    //let _path=path
    //this.router.navigate([_path]);
    // this.navigationClose.nativeElement.hidden = false;
  }

  

  hideNavDiv():void{
    
    this.navigationClose.nativeElement.classList.remove('show');
    
  }

}
