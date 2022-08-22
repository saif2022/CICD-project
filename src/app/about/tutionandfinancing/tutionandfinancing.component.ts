import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tutionandfinancing',
  templateUrl: './tutionandfinancing.component.html',
  styleUrls: ['./tutionandfinancing.component.scss']
})
export class TutionandfinancingComponent implements OnInit,AfterViewInit {
  @ViewChild("_nonProfit") nonProfitButton: ElementRef;
  constructor() { }

  ngOnInit(): void {
    //this.nonProfitButton.nativeElement.click()
  }

  ngAfterViewInit():void{
    this.nonProfitButton.nativeElement.click();
  
  }
}
