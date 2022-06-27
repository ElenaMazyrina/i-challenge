import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LogComponent } from './log/log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LogDataMapperService } from './log-data-mapper.service';
import { LogItemComponent } from './log-item/log-item.component';
import { LogItemDataTableComponent } from './log-item-data-table/log-item-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LogItemIconComponent } from './log-item-icon/log-item-icon.component';

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        LogComponent,
        LogItemComponent,
        LogItemDataTableComponent,
        LogItemIconComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
    ],
    providers: [
        DataService,
        LogDataMapperService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
