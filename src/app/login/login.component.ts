import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  yourList: any;

  constructor() { }

  ngOnInit(): void {
    this.yourList = JSON.parse(localStorage.getItem('email') || '') || [];
    this.yourList = JSON.parse(localStorage.getItem('password') || '') || []; 
  }

  OnSubmit(){
    console.log("Email:", this.email);
    localStorage.setItem('email', JSON.stringify(this.email));
    console.log("Password:", this.password);
    localStorage.setItem('password', JSON.stringify(this.password));
  }

}
