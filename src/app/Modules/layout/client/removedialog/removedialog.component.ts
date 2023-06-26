import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-removedialog',
  templateUrl: './removedialog.component.html',
  styleUrls: ['./removedialog.component.scss']
})
export class RemovedialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RemovedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,) { }

  ngOnInit(): void {
  }
  
  actionFunction() {
    this.closeModal();
  }
   closeModal() {
    this.dialogRef.close();
  }
}
