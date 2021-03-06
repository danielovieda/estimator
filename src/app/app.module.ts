import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowQuoteComponent } from './show-quote/show-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    GetQuoteComponent,
    HomepageComponent,
    ShowQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [DatePipe, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
