import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { emailValidation } from 'src/app/Constants/validators';
import { signInValidation } from '../../../Constants/validation-message';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  spinner = false;
  linkSent = false;
  validationMessage: any;
  resetForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.validationMessage = signInValidation;
  }
  createForm() {
    this.resetForm = this.fb.group({
      email: ['', [...emailValidation]],
    });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      this.linkSent = true;
    }
  }
}
