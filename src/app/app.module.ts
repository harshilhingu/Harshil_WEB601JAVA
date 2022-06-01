import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike/bike.component';
import { HbikeComponent } from './hbike/hbike.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContantCardComponent } from './contant-card/contant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    HbikeComponent,
    ContentListComponent,
    ContantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
