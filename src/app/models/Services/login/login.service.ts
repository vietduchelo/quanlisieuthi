import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from 'angular-2-local-storage'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router : Router, private canActivate: CanActivate, private localStrorage : LocalStorageService) { }
CanActivate(){
  const login = this.localStrorage.get('token');
    if (!login) {
      this.router.navigate(['/login']);
    }
    return login ? true : false;
  }
}


