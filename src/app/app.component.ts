import { environment } from 'src/environments/environment';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AuthService } from 'src/_services/auth.service';

// https://stackblitz.com/edit/angular-login-hide-navbar-layout?file=src%2Fapp%2Fauth%2Fauth.guard.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Breakpoints.Handset
  public isLoggedIn$ = this.authService.isLoggedIn$.pipe(
    tap(_ => { console.error('isLoggedIn$', _, typeof _); }),
    shareReplay()
  );
  public isLoggedIn:boolean = false;
  public appTitle = environment.appTitle;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    tap(r => console.log(r.breakpoints)),
    map(result => result.matches),
    tap(console.log),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService:AuthService
  ) {
    this.isLoggedIn = authService.isLoggedIn();
  }
  ngOnInit(): void {
    console.log('%cAppComponent', 'background:purple;color:white;font-weight:bold');
  }
}
