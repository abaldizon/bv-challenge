import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailReportService {

  private baseUrl = "https://www.beenverified.com/hk/dd/email?email=";

    constructor(private http: HttpClient) { }

    login(email,password) {
      return (password=='BV-API-Challenge​')?true:false;
    }

    getEmailReport(email) {
      const url = "https://www.beenverified.com/hk/dd/email?email="+email+"&exporttype=jsonp"
      return this.http.jsonp(url, 'callback');
    }
}
