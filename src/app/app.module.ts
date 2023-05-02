import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListDataComponent } from './user-list-data/user-list-data.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { NestedFoorLoopComponent } from './nested-foor-loop/nested-foor-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { TooglElementComponent } from './toogl-element/toogl-element.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserListDataComponent,
    StudentListComponent,
    UserAdminComponent,
    NestedFoorLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    UserFormComponent,
    TooglElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
