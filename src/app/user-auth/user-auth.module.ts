import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignUpComponent,
    SignComponent
  ]
})
export class UserAuthModule { }
