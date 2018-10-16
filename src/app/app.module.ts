import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, DataTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
