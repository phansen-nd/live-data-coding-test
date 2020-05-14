import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../objects/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = "https://gotlivedata.io/api/v1/login";

  constructor(private http: HttpClient) { }

  loginWithEmailAndPassword(email: string, password: string): Observable<Response> {
    return this.http.post<Response>(this.endpoint, {email: email, password: password});
  }
}
