import { Component, Input, OnInit } from '@angular/core';
import { ILogData } from '../interfaces/i-log-data';
import { LogEntityType } from '../interfaces/log-entity-type';
import { DoorState } from '../interfaces/door-state';
import { LogIcons } from '../interfaces/log-icons';
import { LightingState } from '../interfaces/lighting-state';

@Component({
    selector: 'app-log-item-icon',
    templateUrl: './log-item-icon.component.html',
    styleUrls: ['./log-item-icon.component.scss']
})
export class LogItemIconComponent {
    @Input() data: ILogData;

    public get icon(): string | null {
        if (this.data.type === LogEntityType.Door && this.data.state === DoorState.Closed) {
            return LogIcons.Lock;
        }

        if (this.data.type === LogEntityType.Door && this.data.state === DoorState.Opened) {
            return LogIcons.LockOpen;
        }

        if (this.data.type === LogEntityType.Lighting && this.data.state === LightingState.Off) {
            return LogIcons.Lightbulb;
        }

        if (this.data.type === LogEntityType.Lighting && this.data.state === LightingState.On) {
            return LogIcons.LightbulbOutline;
        }

        if (this.data.type === LogEntityType.Temperature) {
            return LogIcons.Thermostat;
        }

        return null;
    }
}
