import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss']
})
export class CampusComponent implements OnInit {

  constructor() { }

  imageList=[
    "assets/img/campus/IMG_8205.jpg",
    "assets/img/campus/IMG_8225.jpg",
    "assets/img/campus/IMG_8206.jpg",
    "assets/img/campus/legacy central club lounge III.jpg",
    "assets/img/campus/legacy central conference room.jpg",
    "assets/img/campus/legacy central club lounge.jpg",
    "assets/img/campus/legacy central club lounge IV.jpg",
    "assets/img/campus/legacy central club lounge III.jpg",
    "assets/img/campus/legacy central club lounge II.jpg",
    "assets/img/campus/legacy central booths.jpg",
    "assets/img/campus/legacy central 1074 II.jpg",
    "assets/img/campus/IMG_8227.jpg",
    "assets/img/campus/legacy central 1071 III.jpg",
    "assets/img/campus/IMG_8215.jpg",
    "assets/img/campus/legacy central 1068.jpg",
    "assets/img/campus/Legacy central 1067.jpg",
    "assets/img/campus/IMG_8221.jpg",
    "assets/img/campus/legacy central 1062.jpg",
    "assets/img/campus/IMG_8220.jpg",
    "assets/img/campus/legacy central 1062 II.jpg",
   ]
  ngOnInit(): void {
  }

}
