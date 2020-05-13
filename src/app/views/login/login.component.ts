import { Component, OnInit } from '@angular/core';
import { LoginObject } from 'src/app/objects/login-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObject = new LoginObject();
  token: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick() {
    
  }

}
