import { Component } from '@angular/core';
import { Content } from './models/content';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Hingu_Bike';


  constructor() {
    let contentitem: Content;
    

    contentitem = {
      id: 0,
      title: 'CBR 10000RR',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "Race bike",
    };

    contentitem = {
      id: 1,
      title: 'BMW',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "Race bike",

    };
   
    contentitem = {
      id: 2,
      title: 'Duggatti',
      body: "steel and alumminium",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "play",
 
    };
    
    contentitem = {
      id: 3,
      title: 'splender',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "old man",

    };


  }
}