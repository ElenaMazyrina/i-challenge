import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
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
    public filteredData: ILog[];
    private destroy$ = new Subject<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly dataService: DataService,
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
        this.filteredData = this.data;
        this.isDataReady = true;
        this.initializeControls();
    }

    private initializeControls(): void {
        this.searchControl = this.fb.control(null);

        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            map((v) => v.toLowerCase()),
            takeUntil(this.destroy$),
        ).subscribe((searchString) => {
            if (!searchString) {
                this.filteredData = this.data;
            }

            this.filteredData = this.filteredData.map((v) => {
                return {
                    ...v,
                    data: v.data.filter((item) => {
                        return item.title.toLowerCase().startsWith(searchString) ||
                            item.description.toLowerCase().startsWith(searchString);
                    })
                };
            });
        });
    }
}
