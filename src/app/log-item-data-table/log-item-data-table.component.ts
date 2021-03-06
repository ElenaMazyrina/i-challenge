import { Component, Input } from '@angular/core';
import { ILogData } from '../interfaces/i-log-data';

@Component({
    selector: 'app-log-item-data-table',
    templateUrl: './log-item-data-table.component.html',
    styleUrls: ['./log-item-data-table.component.scss']
})
export class LogItemDataTableComponent {
    @Input() data: ILogData[];
    public displayedColumns: string[] = ['timeStamp', 'icon', 'title', 'description'];
}
