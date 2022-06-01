import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
    Bikeslist: Content[];

  constructor() {
    this.Bikeslist = [
      {
        id: 0,
        title: 'CBR 10000RR',
        body: "steel",
        imageLink: "https://wallpaperaccess.com/cbr-bike",
        type: "Race bike",

      }, {
        id: 1,
      title: 'BMW',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "Race bike",


      }, {
        id: 3,
      title: 'splender',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "old man",

      }, {
        id: 3,
        title: 'royal enfeild',
        body: "whole steel",
        imageLink: "https://wallpaperaccess.com/cbr-bike",
        type: "big bikes",
       
      }, {
        id: 4,
        title: 'hero honda',
        body: "aluminum",
       
        imageLink: "https://wallpaperaccess.com/cbr-bike",
        type: "low cost",
      }
    ];

  }

  ngOnInit(): void {
  }

}