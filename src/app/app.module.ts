import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HeaderComponent } from './header/header.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
  ],
  imports: [
    NzLayoutModule,
    NzGridModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    MatToolbarModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
