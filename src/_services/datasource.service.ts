import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor(private http:HttpClient) { }
  
  getTicketList(): Observable<any> {
    return this.http.get("http://192.168.1.170:8080/helpdeskv2/tickets/1,2,3,4,6,7,10,11/1957");
  }
}
