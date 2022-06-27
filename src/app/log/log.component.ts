import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
import { LogDataMapperService } from '../log-data-mapper.service';
import { ILog } from '../interfaces/i-log';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, OnDestroy {
    public isDataReady = false;
    public searchControl: FormControl;
    public data: ILog[];
    public filterControl: FormControl;
    private destroy$ = new Subject<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly dataService: DataService,
        private readonly mapper: LogDataMapperService,
    ) {
    }

    public ngOnInit(): void {
        this.getData();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private async getData(): Promise<void> {
        this.data = await this.dataService.getData();

        this.isDataReady = true;
        this.initializeControls();
    }

    private initializeControls(): void {
        this.searchControl = this.fb.control(null);
        this.filterControl = this.fb.control('la');

        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            takeUntil(this.destroy$),
        ).subscribe((v) => console.log(v));
    }
}
