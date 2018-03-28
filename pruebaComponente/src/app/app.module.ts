import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SliderChmModule } from './modules/slider-chm/slider-chm.module';
import { SliderChmComponent } from './modules/slider-chm/slider-chm.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderChmComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
