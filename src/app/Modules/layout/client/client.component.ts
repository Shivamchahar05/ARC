import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/Constants/column';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  pageSize!:any;
  heading = [
    { heading: 'Client ID', key: 'clientId', type: 'text', sort: false },
    { heading: 'First Name', key: 'fName', type: 'link', link: '/dashboard/client-details', sort:true },
    { heading: 'Middle Name', key: 'mName', type: 'text' },
    { heading: 'Last Name', key: 'lName', type: 'text' },
    { heading: 'Email Address', key: 'email', type: 'text' },
    { heading: 'Mobile Number', key: 'number', type: 'text' },
    { heading: 'Case Status', key: 'caseStatus', type: 'text', sort: false },
    { heading: 'Status', key: 'status', type: 'text', sort:false },
    { heading: 'Action', key: 'status', type: 'action', action: [1, 2, 3] }
  ]
  Table_DATA: any[] = [
    { 'clientId': 1, 'fName': 'abc', 'mName': 'kumar', 'lName': 'qwe', 'email': 'H@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 2, 'fName': 'lkj', 'mName': 'kumar', 'lName': 'sii', 'email': 'He@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 3, 'fName': 'xyz', 'mName': 'kumar', 'lName': 'sii', 'email': 'Li@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
    { 'clientId': 4, 'fName': 'efg', 'mName': 'kumar', 'lName': 'sii', 'email': 'Be@gmail.com', 'number': 1324235346547, 'caseStatus': 110044, 'status': 'In Progress' },
  ];

  constructor(private route: Router, private fb: FormBuilder) { }
  clientForm!: FormGroup;
  Search: any
  ngOnInit(): void {
    this.createForm();
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)

  }
  getUserData(e: any) {
    console.log(e, "Inside Client Component");
  }
  clientdetails() {
    this.route.navigate(["/layout/client/clientdetails"])
  }
  profile() {
    this.route.navigate(["/layout/profile"])
  }
  createForm() {
    this.clientForm = this.fb.group({
      Search: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      pageSize:[null]
    });
  }
  get formControls() {
    return this.clientForm.controls;
  }
  value: any
  reset(){
    this.datasource.filter=""
    this.clientForm.reset();
  }
  applyFilter(event: any) {
    this.pageSize=this.clientForm?.controls.pageSize?.value;
    console.log('byeeee', this.clientForm?.controls.Search?.value);
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
    console.log('byeeee',this.clientForm?.controls.Search?.value);
    this.applyFilter(this.clientForm?.controls?.Search?.value)
  }
}


