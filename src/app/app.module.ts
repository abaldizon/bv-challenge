import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { HttpModule }    from '@angular/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OrderListModule } from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccordionModule,
    OrderListModule,
    DataViewModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
