import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
