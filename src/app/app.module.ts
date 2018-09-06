import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { HttpModule }    from '@angular/http';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccordionModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
