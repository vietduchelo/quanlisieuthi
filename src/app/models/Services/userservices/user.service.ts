import { IUser } from './../../Entity/user.model';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: Http, private router: Router) { }

  checkLogin(email: String, password: String): Observable<any>{
    return this.htpp.post('http://localhost:3000/auth/login',{email: email,password: password})
  }
}
