import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {VoterComponent} from './1-voter/voter.component';
import {TodosComponent} from './2-todos/todos.component';
import {UserDetailsComponent} from './3-user-details/user-details.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
