
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  private _randomUserSeed = "61036ae9cc988816";

  constructor(private http:HttpClient) { }
  
  getUserList(): Observable<any> {
    return this.http.get("http://localhost:8080/adminv3/users");
  }

  getTicketList():any {
    return this.http.get("http://localhost:8080/helpdeskv2/tickets/1,2,3,4,6,7,10,11/1957");
    const o1 = this.http.get("http://localhost:8080/helpdeskv2/tickets/1,2,3,4,6,7,10,11/1957");
    const o2 = this.http.get("http://localhost:8080/adminv3/users");
    
    return forkJoin([o1,o2]).subscribe(
      results => { 
        console.log('results', results);
        let tickets = results[0][0];
        let users = results[1], usersMap = new Map(), tmp;
        
        (users as any).forEach(el => { usersMap.set(el.id, el); });
        console.log(usersMap);
        tickets.map( t => {
          t['assignee_first_name'] =
          t['assignee_last_name'] =
          t['assignee_full_name'] =
          t['assignee_team'] =      
          t['assignee_title'] = '';

          if(t.assignedTo != 0) {
            tmp = usersMap.get(t.assignedTo);
            t['assignee_first_name']  = tmp.first_name;
            t['assignee_last_name']   = tmp.last_name;
            t['assignee_full_name']   = `${tmp.first_name} ${tmp.last_name}`;
            t['assignee_team']        = (tmp.team || '').trim();
            t['assignee_title']       = (tmp.title || '').trim();
          }
        });

        return tickets;
      },
      err => console.log('ERR', err),
      () => console.log('COMPLETE!!!')
    );

  }

  getTicketMeta(): Observable<any> {
    return this.http.get("http://localhost:8080/helpdeskv2/ticket/meta2/Admin,Mapfile,MapfileAdmin,Blueprint,BlueprintAdmin,HelpdeskAdmin,Sprout,SproutAdmin,SAInventoryAdmin,IFAAdmin");
  }

  getFoo():any {
    const o1 = this.http.get("http://localhost:8080/adminv3/users");
    const o2 = this.http.get("http://localhost:8080/helpdeskv2/tickets/1,2,3,4,6,7,10,11/1957");
    
  }

  
  parkingList(): Observable<any> {
    let rndDelay = Math.random() * 100;
    return this.http.get('http://localhost:8080/parking' + '/parkingPermitsQueue');
  }
  downloadPermit(id):any {
    return this.http.get(`http://localhost:8080/fileservicev2/download/parking/${id}`,  {responseType: 'text'});
  }

  getRandomUserData(pageSize:number=100, page:number=1) {
    
    return this.http.get(`https://randomuser.me/api/?seed=${this._randomUserSeed}&page=${page}&results=${pageSize}`).pipe(
      catchError(
        (err, caught) => {
          console.log('err:', {err});
          console.log('caught:', {caught});
          return of(null);
      }),
      map(r => {
        let id = 100;
        r.results.map( p => p.id = id++ );
        return {results: r.results, totalRecords:r.records.length};
      })
    );
  }
}

