import { Component, OnInit } from '@angular/core';
import {StudentReviewList} from  '../../dataModel/studentReviews'
@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.scss']
})
export class StudentReviewsComponent implements OnInit {
  studentReviewList=StudentReviewList;
  constructor() { }

  ngOnInit(): void {
  }

}
