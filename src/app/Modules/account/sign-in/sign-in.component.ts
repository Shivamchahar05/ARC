import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signInValidation } from 'src/app/Constants/validation-message';
import { emailValidation, loginPasswordValidation } from 'src/app/Constants/validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword = false;
  spinner = false;
  validationMessage: any;
  signForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.validationMessage = signInValidation;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  createForm() {
    this.signForm = this.fb.group({
      email: ['', [...emailValidation]],
      password: ['', [...loginPasswordValidation]],
    });
  }

  onSubmit() {

  }
}
