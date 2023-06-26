import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { passwordValidation } from 'src/app/Constants/validators';
import { signInValidation } from '../../../Constants/validation-message';
import { ConfirmPasswordValidator } from '../../../Constants/validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showPassword1 = false;
  showPassword2 = false;
  spinner = false;
  validationMessage: any;
  resetForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.validationMessage = signInValidation;
  }
  createForm() {
    this.resetForm = this.fb.group({
      password: ['',[...passwordValidation,this.noWhitespaceValidator]],
      cnfPassword: ['',[...passwordValidation,this.noWhitespaceValidator]],
    },
    {
      validator: ConfirmPasswordValidator("password", "cnfPassword")
    }
    );
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  toggleShow1() {
    this.showPassword1 = !this.showPassword1;
  }
  toggleShow2() {
    this.showPassword2 = !this.showPassword2;
  }
  onSubmit() {
    if (this.resetForm.valid) {
        console.log("hiiii");
    }
  }
}
