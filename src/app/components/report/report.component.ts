import { Component, OnInit } from '@angular/core';
import { EmailReport } from './../../model/email-report'
import { EmailReportService } from '../../service/email-report.service';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  emailReport: EmailReport;

  constructor(private emailReportService: EmailReportService) { }

  ngOnInit() {
    // this.emailReportService.getEmailReport('skip.suva@gmail.com').subscribe(emailReport => {
    //   this.emailReport = emailReport;
    // })
  }

  onSubmit() { 
    this.emailReportService.getEmailReport('skip.suva@gmail.com').subscribe(emailReport => {
      this.emailReport = emailReport;
    })
   }

}
