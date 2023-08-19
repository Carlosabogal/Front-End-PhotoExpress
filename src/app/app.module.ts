import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Agrega esta importación
import { HttpClientModule } from '@angular/common/http';
import { RegisterClientComponent } from './Component/register-client/register-client.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterClientComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
