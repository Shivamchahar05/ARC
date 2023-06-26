import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {
  addstaffform:any
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addstaffform = this.fb.group({
      first_name: ["", [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      last_name: ["", [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      email: [null, [Validators.required,Validators.email, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
     
    });
  }
  get formControls() {
    return this.addstaffform.controls;
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }
}
