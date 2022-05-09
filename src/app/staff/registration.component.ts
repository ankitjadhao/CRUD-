import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  yourname: any;
  youremail: any;
  password: any;
  mobile: any;
  yourList: any;

  constructor() { }

  ngOnInit(): void {
    this.yourList = JSON.parse(localStorage.getItem('yourname') || '') || [];
    this.yourList = JSON.parse(localStorage.getItem('youremail') || '') || [];
    this.yourList = JSON.parse(localStorage.getItem('password') || '') || [];
    this.yourList = JSON.parse(localStorage.getItem('mobile') || '') || [];
  }
  
  Register(){

    console.log("Your name:", this.yourname);
    localStorage.setItem('yourname', JSON.stringify(this.yourname));
    console.log("Your email:", this.youremail);
    localStorage.setItem('youremail', JSON.stringify(this.youremail));
    console.log("Password:", this.password);
    localStorage.setItem('password', JSON.stringify(this.password));
    console.log("Mob no.:", this.mobile);
    localStorage.setItem('mobile', JSON.stringify(this.mobile));
  }


}
