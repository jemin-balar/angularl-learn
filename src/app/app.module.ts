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
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule}  from "@angular/material/badge";
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { ChildComponent } from './child/child.component';
import { ResuablecomponentsComponent } from './resuablecomponents/resuablecomponents.component';
import { ChildparentComponent } from './childparent/childparent.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { TemplateRefranceComponent } from './template-refrance/template-refrance.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BasicPipesComponent } from './basic-pipes/basic-pipes.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';



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
    BootstrapComponent,
    MaterialuiComponent,
    TodoTaskComponent,
    ChildComponent,
    ResuablecomponentsComponent,
    ChildparentComponent,
    TwowayBindingComponent,
    TemplateRefranceComponent,
    TypescriptComponent,
    BasicPipesComponent,
    UsdInrPipe,
    FormComponent,
    RedElDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    UserAuthModule,
    FormsModule, // its use to form 
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule  // reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
