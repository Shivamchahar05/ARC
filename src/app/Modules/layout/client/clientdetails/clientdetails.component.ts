import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/Constants/column';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent implements OnInit {
  datasource = new MatTableDataSource<any>()
  heading = [
    { heading: 'S.no', key:'no',type:'text',sort:false},
    { heading: 'Transaction ID', key:'id',type:'link',isLink:'/layout/client/clientdetails', sort:false},
    { heading: 'Amount', key:'amount',type:'text',sort:true},
    { heading: 'Date & Time', key:'date',type:'text',sort:true},
  ]
  Table_DATA: any[] = [
    {'no': 1, 'id': '#JKMLW12','amount':'$200', 'date': '04/03/1996 , 3:30 PM', },
    {'no': 1, 'id': '#JKMLW12','amount':'$300', 'date': '04/03/1996 , 3:30 PM', },
    {'no': 1, 'id': '#JKMLW12','amount':'$400', 'date': '04/03/1996 , 3:30 PM', },
    {'no': 1, 'id': '#JKMLW12','amount':'$500', 'date': '04/03/1996 , 3:30 PM', },
    {'no': 1, 'id': '#JKMLW12','amount':'$600', 'date': '04/03/1996 , 3:30 PM', },


   

  ];
  Clientform!: FormGroup;
  constructor(private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  onFileChange(event: any) {
    var file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];

    var reader = new FileReader();

    // reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }
  getUserData(e: any) {
    console.log(e,"Inside Client Component");
  }

}
