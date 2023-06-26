import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  spinner = false;
  showPassword = true;
  showConfirmPassword = true;
  userDetailsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.userDetailsForm = this.formBuilder.group({
      full_name: [null, [Validators.required, Validators.minLength(3),Validators.pattern(/^((?!\s{2,}).)*$/)]],
      email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      phone_number: [null, [Validators.required, Validators.pattern('^((?!0+$))?[7][9][0-9]{7}$')]],
      postalcode:[null,[Validators.required]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
      confirm_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
    },
    {
      // validator: ConfirmedValidator('password', 'confirm_password')
    })

  }
  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        // this.commonService.authSnackBar('invalid format', 'Close', 'red-snackbar');
        return;
      }
      // reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }

}
