import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {TableColumn} from 'src/app/Constants/column';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  pageSize!:any;
  heading = [
    { heading: 'S.No', key:'sno',type:'text',sort:false},
    { heading: 'User Id', key:'user',type:'text'},
    { heading: 'First name', key:'fname',type:'link',link:'/dashboard/client-details',sort:true},
    { heading: 'Last name', key:'lname',type:'text',},
    { heading: 'Email', key:'email',type:'text',},
    { heading: 'Mobile no.', key:'Mobile',type:'text',},
    { heading: 'Tittle', key:'tittle',type:'text',sort:false},
    { heading: 'Description', key:'Description',type:'text'},
    { heading: 'Sent On', key:'sent',type:'text',sort:true},
    { heading: 'Action', key: 'status', type: 'action', action: [4] }
  ]
  Table_DATA: any[] = [
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '04/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '04/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '04/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '03/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '07/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '01/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '09/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '10/03/1996, 3:30 PM', },
    {'sno': 1,'user':'12345','fname':'Martin','lname':'Brown','email':'Mbrown@xyz.com','Mobile':'+660 12345', 'tittle': 'Terms of uses','Description':'lorem lorem lorem lorem', 'sent': '04/03/1996, 3:30 PM', },
  ];

  constructor(private route:Router,private fb:FormBuilder) { }
  notificationForm!: FormGroup;
  Search: any
  ngOnInit(): void {
    this.createForm();
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }
  send_notifdication(){
    this.route.navigate(['/layout/notification/sendnotification'])
  }
  createForm() {
    this.notificationForm = this.fb.group({
      Search: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      pageSize:[null]
    });
  }
  get formControls() {
    return this.notificationForm.controls;
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }
  reset(){
    this.datasource.filter=""
    this.notificationForm.reset();
  }
  applyFilter(event: any) {
    this.pageSize=this.notificationForm?.controls.pageSize?.value;
    console.log('byeeee', this.notificationForm?.controls.Search?.value);
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
    console.log('byeeee',this.notificationForm?.controls.Search?.value);
    this.applyFilter(this.notificationForm?.controls?.Search?.value)
  }

}
