import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  addToken() {
    const head = new Headers();
    const token = localStorage.getItem('x') as string;
    head.append('Content-Type' , 'application/json');
    head.append('x-access-token' , token);
    const option = new RequestOptions({headers: head});
    return option;
  }
}
