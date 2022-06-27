import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LogComponent } from './log/log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LogDataMapperService } from './log-data-mapper.service';

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        LogComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [
        DataService,
        LogDataMapperService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
