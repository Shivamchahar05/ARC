import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/app/Constants/column';
@Component({
  selector: 'app-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  heading = [
    { heading: 'S.no', key:'no',type:'text',sort:false},
    { heading: 'First Name', key:'fName',type:'link',isLink:'/layout/client/clientdetails', sort:true},
    { heading: 'Middle Name', key:'mName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email Address', key:'email',type:'text'},
    { heading: 'Phone', key:'number',type:'text'},
    { heading: 'Registered', key:'register',type:'text',sort:false},
    // { heading: 'Status', key:'status',type:'text',sort:true},
    // { heading: 'Action', key: 'status', type: 'action', action: [1, 2, 3] }
  ]
  Table_DATA: any[] = [
    {'no': 1, 'fName': 'Martin','mName':'Sean', 'lName': 'Brown', 'email': 'H@gmail.com','number':13242353,'register':'21/5/2022'},
    {'no': 1, 'fName': 'shivam','mName':'Sean', 'lName': 'Brown', 'email': 'H@gmail.com','number':13242353,'register':'21/5/2022'},
    {'no': 1, 'fName': 'harsh','mName':'Sean', 'lName': 'Brown', 'email': 'H@gmail.com','number':13242353,'register':'21/5/2022'},
    {'no': 1, 'fName': 'peter','mName':'Sean', 'lName': 'Brown', 'email': 'H@gmail.com','number':13242353,'register':'21/5/2022'},
    {'no': 1, 'fName': 'ashi','mName':'Sean', 'lName': 'Brown', 'email': 'H@gmail.com','number':13242353,'register':'21/5/2022'},

  ];
  DashboardForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }
  createForm() {
    this.DashboardForm = this.fb.group({
      Search: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    });
  }
  get formControls() {
    return this.DashboardForm.controls;
  }
  applyFilter(event: any) {
    console.log('byeeee', this.DashboardForm?.controls.Search?.value);
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
  // tableColumns: Array<any> = [
  //   {
  //     columnDef: 'S_No',
  //     header: 'S_No',
  //     cell: (element: Record<string, any>) => `${element['S_No']}`
  //   },
  //   {
  //     columnDef: 'First_name',
  //     header: 'First_name',
  //     cell: (element: Record<string, any>) => `${element['First_name']}`,
  //     isLink: true,
  //     url: 'abc'
  //   },
  //   {
  //     columnDef: 'Middle_Name',
  //     header: 'Middle_Name',
  //     cell: (element: Record<string, any>) => `${element['Middle_Name']}`
  //   },
  //   {
  //     columnDef: 'Last_Name',
  //     header: 'Last_Name',
  //     cell: (element: Record<string, any>) => `${element['Last_Name']}`
  //   },
  //   {
  //     columnDef: 'Email_address',
  //     header: 'Email_address',
  //     cell: (element: Record<string, any>) => `${element['Email_address']}`
  //   },
  //   {
  //     columnDef: 'phone',
  //     header: 'phone',
  //     cell: (element: Record<string, any>) => `${element['phone']}`
  //   },
  //   {
  //     columnDef: 'Registered_On',
  //     header: 'Registered_On',
  //     cell: (element: Record<string, any>) => `${element['Registered_On']}`
  //   }
  // ];

  // tableData: Array<any> = [
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
  //   { S_No: 1, First_name: 'Martin', Middle_Name: 'Sean', Last_Name: 'Brown' ,Email_address:'martin@gmail.com', phone:'+867-876-9898' ,Registered_On:'21/05/2022'},
    
    
    

  // ];

}
