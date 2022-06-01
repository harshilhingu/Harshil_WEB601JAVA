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
        imageLink: "https://i.pinimg.com/originals/62/22/bc/6222bce47a79bcb9cd76c11520732add.jpg",
        type: "Race bike",

      }, {
        id: 1,
      title: 'BMW',
      body: "steel",
      imageLink: "https://i.pinimg.com/originals/ef/6b/0d/ef6b0d163e814f0a52a627a6919add8a.jpg",
      type: "Race bike",


      }, {
        id: 3,
      title: 'splender',
      body: "steel",
      imageLink: "https://i.pinimg.com/originals/21/29/5d/21295d154332eeecdcf7a490b2ffad40.jpg",
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
      }, {
        id: 5,
        title: 'Ktm',
        body: "aluminum",
       
        imageLink: "https://i.pinimg.com/originals/09/46/49/094649be42854936f2f6a946ab6242cb.jpg",
        type: "llo",
      }, {
        id: 6,
        title: 'Duke',
        body: "Hard steel",
       
        imageLink: "https://i.pinimg.com/originals/2f/40/57/2f4057e00ad5c75b344be982dc61f89a.jpg",
        type: "Duke",
      }, {
        id: 7,
        title: 'Yamaha',
        body: "Hard steel",
       
        imageLink: "https://i.pinimg.com/originals/3f/3c/d6/3f3cd64942b8bcf6da38d980048550ca.jpg",
        type: "Yamaha",
      }
    ];

  }

  ngOnInit(): void {
  }

}