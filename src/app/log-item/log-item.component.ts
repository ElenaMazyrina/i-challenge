import { Component, Input, OnInit } from '@angular/core';
import { isToday } from '../helpers/is-today-helper';
import { isYesterday } from '../helpers/is-yesterday-helper';
import { ILog } from '../interfaces/i-log';

@Component({
    selector: 'app-log-item',
    templateUrl: './log-item.component.html',
    styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent {
    @Input() item: ILog;

    constructor() {
    }

    public get titlePostfix(): string | null {
        if (isToday(new Date(this.item.date))) {
            return 'Today';
        } else if (isYesterday(new Date(this.item.date))) {
            return 'Yesterday';
        } else {
            return null;
        }
    }

    public get hasData(): boolean {
        return this.item.data.length > 0;
    }
}
