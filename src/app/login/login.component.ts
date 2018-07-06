import { IUser } from './../models/Entity/user.model';
import { UserService } from './../models/Services/userservices/user.service';
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// import {Http}  from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userSV: UserService, private router: Router) { }
  user: IUser;

  ngOnInit() {

   
  }
  email: String;
  password: String;
  checkLogin(){
    this.userSV.checkLogin(this.email, this.password).subscribe(data => {
      if(!data){
        alert((data._body)._message);
      
        this.router.navigate(['./'])
        
      }
      else{
        console.log(data);
        alert(data._body);
        this.router.navigate(['./doashboard'])

      }
    

    })
  }


}
