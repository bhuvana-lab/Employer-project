import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewemployerComponent } from './newemployer/newemployer.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ApidefService } from './apidef.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    NewemployerComponent,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApidefService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
