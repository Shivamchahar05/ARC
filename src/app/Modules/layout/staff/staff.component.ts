import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/Constants/column';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:false},
    { heading: 'First Name', key:'fName',type:'link',link:'/dashboard/client-details',sort:true},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    { heading: 'Status', key:'status',type:'text',sort:false},
    { heading: 'Action', key: 'status', type: 'action', action: [4, 3] }
  ]
  Table_DATA: any[] = [
    {'sno': 1, 'fName': 'abc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
    {'sno': 1, 'fName': 'abc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
    {'sno': 1, 'fName': 'abc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
    {'sno': 1, 'fName': 'bbc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
    {'sno': 1, 'fName': 'cbc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
    {'sno': 1, 'fName': 'dbc', 'lName': 'qwe', 'email': 'H@gmail.com', 'status':'Active',},
   
  ];
  constructor(private route:Router,private fb:FormBuilder) { }
  staffForm!: FormGroup;
  Search: any
  ngOnInit(): void {
    this.createForm();
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

  addstaff(){
    this.route.navigate(['layout/staff/addstaff'])
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }
  createForm() {
    this.staffForm = this.fb.group({
      Search: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    });
  }
  get formControls() {
    return this.staffForm.controls;
  }
  applyFilter(event: any) {
    console.log('byeeee', this.staffForm?.controls.Search?.value);
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
  //     columnDef: 'First_name',
  //     header: 'First_name',
  //     cell: (element: Record<string, any>) => `${element['First_name']}`,
  //     isLink: true,
  //     url: 'abc'
  //   },
  //   {
  //     columnDef: 'Last_name',
  //     header: 'Last_name',
  //     cell: (element: Record<string, any>) => `${element['Last_Name']}`
  //   },
  //   {
  //     columnDef: 'Email',
  //     header: 'Email',
  //     cell: (element: Record<string, any>) => `${element['Email']}`
  //   },
  //   {
  //     columnDef: 'Status',
  //     header: 'Status',
  //     cell: (element: Record<string, any>) => `${element['Status']}`
  //   },
  //   {
  //     columnDef: 'Action',
  //     header: 'Action',
  //     cell: (element: Record<string, any>) => `${element['Action']}`
  //   }
  // ];

  // tableData: Array<staff_column> = [
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  //   { S_no: 1, First_name: 'Martin', Last_name: 'Brown' ,Email:'martin@gmail.com', Status:'Active' ,Action:'12342'},
  // ]

}
