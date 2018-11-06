import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {VoterComponent} from './1-voter/voter.component';
import {TodosComponent} from './2-todos/todos.component';



@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
