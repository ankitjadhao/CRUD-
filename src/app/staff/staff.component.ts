import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  isEdit=false;
  
  staffname="" 

  staffList:any=[];
  selectindex: any;
  constructor() { }

  ngOnInit(): void {
    this.staffList = JSON.parse(localStorage.getItem('staffname') || '') || [];
  }

  onSubmit(){
    let data = {
      name:this.staffname
    }
    this.staffList.push(data)
    localStorage.setItem('staffname', JSON.stringify(this.staffList));
    this.staffname=''
   
  }
  onEdit(index:any){
    this.isEdit=true;
    this.staffname=this.staffList[index].name
    localStorage.setItem('staffname', JSON.stringify(this.staffList));
    this.selectindex = index
  }

  onUpdate(){
    this.isEdit=false
    let data = {
      name:this.staffname
    }
    this.staffList[this.selectindex]=data
    localStorage.setItem('staffname', JSON.stringify(this.staffList));
    this.staffname=''
  }

  onDelete(index:any){  
    this.staffList.splice(index,1)
    localStorage.setItem('staffname', JSON.stringify(this.staffList));
  }
}
