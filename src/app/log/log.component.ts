import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
    public isDataReady = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
