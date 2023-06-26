import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {TableColumn} from 'src/app/Constants/column';
@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss']
})
export class EarningComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  heading = [
    { heading: 'S.No', key:'clientId',type:'text',sort:true},
    { heading: 'User ID', key:'user',type:'link',link:'/dashboard/client-details'},
    { heading: 'First Name', key:'fName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    { heading: 'Phone', key:'number',type:'text'},
    { heading: 'Transaction Status', key:'transStatus',type:'text',sort:true},
    { heading: 'Amount', key:'amt',type:'text',sort:true},
    { heading: 'Date & Time', key: 'date', type: 'text',sort:true }
  ]
  Table_DATA: any[] = [
    {'clientId': 1, 'user': 'abc','fName':'kumar', 'lName': 'qwe', 'email': 'H@gmail.com','number':1324235346547,'transStatus':'Complete', 'amt':'$ 20','date':'Apr21,2020 00:39:14'},
    {'clientId': 1, 'user': 'abc','fName':'kumar', 'lName': 'qwe', 'email': 'H@gmail.com','number':1324235346547,'transStatus':'Complete', 'amt':'$ 20','date':'Apr21,2020 00:39:14'},
    {'clientId': 1, 'user': 'abc','fName':'kumar', 'lName': 'qwe', 'email': 'H@gmail.com','number':1324235346547,'transStatus':'Complete', 'amt':'$ 20','date':'Apr21,2020 00:39:14'},
    {'clientId': 1, 'user': 'abc','fName':'kumar', 'lName': 'qwe', 'email': 'H@gmail.com','number':1324235346547,'transStatus':'Complete', 'amt':'$ 20','date':'Apr21,2020 00:39:14'},
    {'clientId': 1, 'user': 'abc','fName':'kumar', 'lName': 'qwe', 'email': 'H@gmail.com','number':1324235346547,'transStatus':'Complete', 'amt':'$ 20','date':'Apr21,2020 00:39:14'},
   
  ];
  earningForm!: FormGroup;
  Search: any
  constructor(private route:Router ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  createForm() {
    this.earningForm = this.fb.group({
      Search: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    });
  }
  get formControls() {
    return this.earningForm.controls;
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }
  applyFilter(event: any) {
    console.log('byeeee', this.earningForm?.controls.Search?.value);
    console.log(event.target.value,"hiii");
    
    if (event.target.value) {
      console.log("kkkkkkkk");
      
      const filterValue = event.target.value;
      // this.dataSource.filter = filterValue.trim().toLowerCase();
      this.datasource.filter = filterValue.trim().toLocaleLowerCase();
    }
    else{
      this.datasource.filter=""
    }
  }
  // 
  // tableColumns: Array<any> = [
  //   {
  //     columnDef: 'S_no',
  //     header: 'S_no',
  //     cell: (element: Record<string, any>) => `${element['S_no']}`
  //   },
  //   {
  //     columnDef: 'User_Id',
  //     header: 'User_Id',
  //     cell: (element: Record<string, any>) => `${element['User_Id']}`,
      
  //   },
  //   {
  //     columnDef: 'First_name',
  //     header: 'First_name',
  //     cell: (element: Record<string, any>) => `${element['First_name']}`,
  //     isLink: true,
  //     url: 'abc'
  //   },
  //   {
  //     columnDef: 'Last_name',
  //     header: 'Last_name',
  //     cell: (element: Record<string, any>) => `${element['Last_name']}`
  //   },
  //   {
  //     columnDef: 'Email',
  //     header: 'Email',
  //     cell: (element: Record<string, any>) => `${element['Email']}`
  //   },
  //   {
  //     columnDef: 'Mobile_No',
  //     header: 'Mobile_No',
  //     cell: (element: Record<string, any>) => `${element['Mobile_No']}`
  //   },
  //   {
  //     columnDef: 'Transaction_status',
  //     header: 'Transaction_status',
  //     cell: (element: Record<string, any>) => `${element['Transaction_status']}`
  //   },
  //   {
  //     columnDef: 'Amount_Paid',
  //     header: 'Amount_Paid',
  //     cell: (element: Record<string, any>) => `${element['Amount_Paid']}`
  //   },
  //   {
  //     columnDef: 'Date_Time',
  //     header: 'Date_Time',
  //     cell: (element: Record<string, any>) => `${element['Date_Time']}`
  //   }
  // ];

  // tableData: Array<Earning_column> = [
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
  //   { S_no: 1,User_Id:12, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Mobile_No:+867-876-9898 ,Transaction_status:'Completed' , Amount_Paid:'$20', Date_Time:'Apr 21,2020 , 00:39:14'},
    
    

  // ];


}
