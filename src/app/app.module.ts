import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizationPipe } from './pipes/capitalization.pipe';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomSecuretyPipe } from './pipes/dom-securety.pipe';
import { PasswordPipe } from './pipes/password.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizationPipe,
    DomSecuretyPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

