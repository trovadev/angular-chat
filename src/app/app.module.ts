import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MensageiroComponent } from './mensageiro/mensageiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    MensageiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
