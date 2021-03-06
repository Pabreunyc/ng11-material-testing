import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log('%cLoginComponent', 'background:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cLoginComponent', 'background:red;color:white');
  }
// ============================================================================
  onSubmit(evt) {
    this.authService.login('paul','24').subscribe(
      (d) => {
        this.router.navigate(['/']);
      }
    )
  }
}
