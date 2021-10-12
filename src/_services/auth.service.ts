import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

const USERS = [
  {id:100, username:'root', password:'00', role:'["root"]' },
  {id:200, username:'paul', password:'24', role:'["user"]' },
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userLoggedIn = new BehaviorSubject(false);

  public isLoggedIn$:Observable<boolean>;

  constructor() {
    this.isLoggedIn$ = this._userLoggedIn.asObservable();
  }

  login(username:string, password:string):Observable<boolean> {
    username = (username || '').trim().toLowerCase();
    password = (password || '').trim();  

    this._userLoggedIn.next(true);

    return of(true);
  }
  logout():void {
    this._userLoggedIn.next(false);
  }

  isLoggedIn():boolean {
    console.log('checking login status:', this._userLoggedIn);
    return this._userLoggedIn.value;
  }
}
