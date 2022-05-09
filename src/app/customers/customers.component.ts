import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  isEdit=false;
  
  cust="" 

  customersList:any=[];
  selectindex: any; 
  constructor() { }

  ngOnInit(): void {
    this.customersList = JSON.parse(localStorage.getItem('cust') || '') || [];
  }

  onSubmit(){
    let data = {
      name:this.cust
    }
    this.customersList.push(data)
    localStorage.setItem('cust', JSON.stringify(this.customersList));
    this.cust=''
   
  }
  onEdit(index:any){
    this.isEdit=true;
    this.cust=this.customersList[index].name
    localStorage.setItem('cust', JSON.stringify(this.customersList));
    this.selectindex = index
  }

  onUpdate(){
    this.isEdit=false
    let data = {
      name:this.cust
    }
    this.customersList[this.selectindex]=data
    localStorage.setItem('cust', JSON.stringify(this.customersList));
    this.cust=''
  }

  onDelete(index:any){  
    this.customersList.splice(index,1)
    localStorage.setItem('cust', JSON.stringify(this.customersList));
  }

}
