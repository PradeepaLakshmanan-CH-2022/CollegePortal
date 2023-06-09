import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
   
    CollegelistComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
