import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  isEdit=false;
  
  empname="" 

  employeesList:any=[];
  selectindex: any;  
  constructor() { }

  ngOnInit(): void {
    this.employeesList = JSON.parse(localStorage.getItem('empname') || '') || [];
  }

  onSubmit(){
    let data = {
      name:this.empname
    }
    this.employeesList.push(data)
    localStorage.setItem('empname', JSON.stringify(this.employeesList));
    this.empname=''
   
  }
  onEdit(index:any){
    this.isEdit=true;
    this.empname=this.employeesList[index].name
    localStorage.setItem('empname', JSON.stringify(this.employeesList));
    this.selectindex = index
  }

  onUpdate(){
    this.isEdit=false
    let data = {
      name:this.empname
    }
    this.employeesList[this.selectindex]=data
    localStorage.setItem('empname', JSON.stringify(this.employeesList));
    this.empname=''
  }

  onDelete(index:any){  
    this.employeesList.splice(index,1)
    localStorage.setItem('empname', JSON.stringify(this.employeesList));
  }

}
