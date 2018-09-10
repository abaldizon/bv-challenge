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

  isLog:boolean = false;
  userInvalid = false;
  email: string = '';

  constructor(private emailReportService: EmailReportService) { }

  ngOnInit() {
    this.isLog = false;
    this.email = '';
  }

  logIn(data) {
    if (!this.isLog) {
      this.isLog=this.emailReportService
      .login(data.email,data.psw);
      this.email=data.email;
      this.isLog?this.onClickSubmit(data.email):this.userInvalid=false;
    }
    else {
      this.isLog=false;
      this.emailReport= null;
    }
  }

  onClickSubmit(email) {
    this.emailReportService.getEmailReport(email)
    .subscribe(emailReport => {
      this.loadInfo(emailReport);
    })
  }

  loadInfo(emailReport) {
    this.emailReport=emailReport;
    this.names=emailReport.names;
    this.emails=emailReport.emails;
    this.images=emailReport.images;
    this.socials=emailReport.social;
    this.jobs=emailReport.jobs;
    this.educations=emailReport.educations;
  }

}
