import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
