import { Component, OnInit } from '@angular/core';
import {  EmailReport, 
          Name, 
          Email, 
          Image, 
          Social, 
          Education,
          Job } from './../../model/email-report'
import { EmailReportService } from '../../service/email-report.service';
import { AccordionModule } from 'primeng/accordion';
import { OrderListModule } from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  emailReport: EmailReport;
  names: Name[];
  emails: Email[];
  images: Image[];
  socials: Social[];
  jobs: Job[];
  educations: Education[];
  text:string;

  constructor(private emailReportService: EmailReportService) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.emailReportService.getEmailReport(data.email)
    .subscribe(emailReport => {
      this.loadInfo(emailReport);
    })
  }

  loadInfo(emailReport: EmailReport) {
    this.emailReport=emailReport;
    this.names=emailReport.names;
    this.emails=emailReport.emails;
    this.images=emailReport.images;
    this.socials=emailReport.social;
    this.jobs=emailReport.jobs;
    this.educations=emailReport.educations;
  }

}
