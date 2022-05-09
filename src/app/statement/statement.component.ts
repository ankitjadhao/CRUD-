import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  isEdit=false;
  
  state="" 

  statementList:any=[];
  selectindex: any;
  constructor() { }

  ngOnInit(): void {
    this.statementList = JSON.parse(localStorage.getItem('state') || '') || [];
  }

  onSubmit(){
    let data = {
      name:this.state
    }
    this.statementList.push(data)
    localStorage.setItem('state', JSON.stringify(this.statementList));
    this.state=''
   
  }
  onEdit(index:any){
    this.isEdit=true;
    this.state=this.statementList[index].name
    localStorage.setItem('state', JSON.stringify(this.statementList));
    this.selectindex = index
  }

  onUpdate(){
    this.isEdit=false
    let data = {
      name:this.state
    }
    this.statementList[this.selectindex]=data
    localStorage.setItem('state', JSON.stringify(this.statementList));
    this.state=''
  }

  onDelete(index:any){  
    this.statementList.splice(index,1)
    localStorage.setItem('state', JSON.stringify(this.statementList));
  }

}
