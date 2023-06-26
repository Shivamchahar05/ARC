import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {TableColumn} from 'src/app/Constants/column';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  transactionForm!: FormGroup;
  constructor(private fb:FormBuilder) { }
  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:true},
    { heading: 'Transaction', key:'trans',type:'link',link:'/dashboard/client-details'},
    { heading: 'First Name', key:'fName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Date of Payment', key:'date',type:'text'},
    { heading: 'Amount Paid', key:'paid',type:'text'},
    { heading: 'Status', key:'status',type:'text',sort:true},
  ]
  Table_DATA: any[] = [
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    {'sno': 1, 'trans': '12345','fName':'Martin', 'lName': 'Brown', 'date': '15/05/2022','paid':'$20', 'status':'complete'},
    
  ];


  ngOnInit(): void {
    this.createForm();
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  createForm() {
    this.transactionForm = this.fb.group({
      Search: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],

    });
  }
  get formControls() {
    return this.transactionForm.controls;
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }
  reset(){
    this.datasource.filter=""
    this.transactionForm.reset();
  }
  applyFilter(event: any) {
    // this.pageSize=this.transactionForm?.controls.pageSize?.value;
    console.log('byeeee', this.transactionForm?.controls.Search?.value);
    console.log(event,"hiii");
    if (event) {
      console.log("kkkkkkkk");
      const filterValue = event;
      this.datasource.filter = filterValue.trim().toLocaleLowerCase();

    }
    else{
      this.datasource.filter=""
    }
  }

  append(){
    console.log('byeeee',this.transactionForm?.controls.Search?.value);
    this.applyFilter(this.transactionForm?.controls?.Search?.value)
  }

}
