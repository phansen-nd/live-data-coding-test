import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginObject } from 'src/app/objects/login-object';
import { LoginService } from 'src/app/services/login.service';
import { Response } from 'src/app/objects/response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  loginObject = new LoginObject();
  token: string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLoginClick() {
    this.subscription.add(this.loginService.loginWithEmailAndPassword(this.loginObject.email, this.loginObject.password)
      .subscribe({
        next: data => this.token = data.token,
        error: error => console.error("Error: " + error)
      }));
  }
}
