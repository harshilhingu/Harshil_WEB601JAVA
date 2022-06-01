import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike/bike.component';
import { DefaultTypePipe } from './default-type.pipe';
import { BikesTypePipe } from './bikes-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    DefaultTypePipe,
    BikesTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
