import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Agrega esta importación
import { HttpClientModule } from '@angular/common/http';
import { RegisterClientComponent } from './Component/register-client/register-client.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Agrega el módulo FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
