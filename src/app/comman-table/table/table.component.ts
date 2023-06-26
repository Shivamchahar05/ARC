import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { RemovedialogComponent } from 'src/app/Modules/layout/client/removedialog/removedialog.component';
import { TableColumn } from 'src/app/Constants/column';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  matHeaderRow: any = [];
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @Input() columns!: any;
  @Input() set pageSize(size:any){
    if(size){
      this.matPaginator._changePageSize(size);
    }
  }
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() checkBox!: string;
  @Input() isFilterable: any;
  @Input() isPageable = true;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() paginationSizes: number[] = [2, 4,10,15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Output() getResponse = new EventEmitter;  
  @Output() userDetail: EventEmitter<any> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  public displayedColumns!: string[];
  // dataSource: any;
  constructor(private route:Router,public dialog: MatDialog) { }
  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.matPaginator;
    // this.dataSource.sort = this.matSort;
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.columns.forEach((item:any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);

  }
  handleClick1(data:any,type:any) {
    this. unblockdialog();
    console.log(type,'ji',data);
    // this.route.navigate(['/layout/client/clientdetails'])
  }
  handleClick2(data:any,type:any) {
    this.exportDialog();
    console.log(type,'ji',data);
  }
  handleClick3(data:any,type:any) {
    this.openDialog()
    console.log(type,'ji',data);
  }
  openDialog() {
     const dialogConfig = new MatDialogConfig();
  
    dialogConfig.data = {
      name: "remove",
      title: "Remove",
      description: "Are you sure you want to remove client",
    }
       const dialogRef = this.dialog.open(RemovedialogComponent ,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  unblockdialog()
{
   const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      name: "remove",
      title: "Unblock",
      description: "Are you sure you want to unblock client",
    }
        const dialogRef = this.dialog.open(RemovedialogComponent ,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });   
} 
exportDialog() {
     const dialogConfig = new MatDialogConfig();
  
    dialogConfig.data = {
      name: "remove",
      title: "Export",
      description: "Are you sure you want to export all the client data?",
    }
       const dialogRef = this.dialog.open(RemovedialogComponent ,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}  
