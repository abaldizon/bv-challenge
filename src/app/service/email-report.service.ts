import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable, onErrorResumeNext, of } from "rxjs";
import { map, filter, switchMap, catchError } from "rxjs/operators";
import { EmailReport } from "../model/email-report";

@Injectable({
  providedIn: 'root'
})
export class EmailReportService {

  private handleError(error: any): Observable<any> {
    return Observable.throw(console.error("Some error occured", error));
  }
  private baseUrl = "https://www.beenverified.com/hk/dd/email?email=";

  constructor(private http: Http) {}

  getEmailReport(email): Observable<EmailReport> {
    return this.http.get(this.baseUrl + email).pipe(
      map(response => {
        return <EmailReport>response.json();
      }, catchError(this.handleError))
    );
  }
}