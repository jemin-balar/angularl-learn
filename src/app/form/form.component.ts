import { Component } from '@angular/core';
//  reactive forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userLogin(item: any) {
    console.warn(item);
  }
  // reactive forms
  signinForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  loginuser() {
    console.warn(this.signinForm.value);
  }
  get user() {
    return this.signinForm.get('user');
  }
  get password() {
    return this.signinForm.get('password');
  }
}
