import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() BikesName?: Content;

  constructor() {
    // this.content = {
    //   id: 0,
    //   title: '',
    //  
    //   type: ''
    // };
  }

  ngOnInit(): void {
    if (this.BikesName) {
      console.log("value of chess player: ", this.BikesName.title);
    }
  }
  displayAuthorAndId(): void {
    console.log("Chess Player ID: ", this.BikesName?.id);
  }

}