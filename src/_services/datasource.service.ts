import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor(private http:HttpClient) { }
  
  getTicketList(): Observable<any> {
    return this.http.get("http://localhost:8080/helpdeskv2/tickets/1,2,3,4,6,7,10,11/1957");
  }

  getTicketMeta(): Observable<any> {
    return this.http.get("http://localhost:8080/helpdeskv2/ticket/meta2/Admin,Mapfile,MapfileAdmin,Blueprint,BlueprintAdmin,HelpdeskAdmin,Sprout,SproutAdmin,SAInventoryAdmin,IFAAdmin");
  }
}
