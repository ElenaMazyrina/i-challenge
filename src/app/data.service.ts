import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LogEntityType } from './interfaces/log-entity-type';
import { DoorState } from './interfaces/door-state';
import { LightingState } from './interfaces/lighting-state';
import { ILog } from './interfaces/i-log';

@Injectable()
export class DataService {
    public getData(): Promise<ILog[]> {
        return of([
            {
                date: '2022-06-27T00:00:00+00:00',
                data: [
                    {
                        timeStamp: '2022-06-27T14:25:48+00:00',
                        title: 'Door - front',
                        description: 'Closed by you',
                        type: LogEntityType.Door,
                        state: DoorState.Closed,
                    }
                ],
            },
            {
                date: '2022-06-26T00:00:00+00:00',
                data: [],
            },
            {
                date: '2022-06-25T00:00:00+00:00',
                data: [
                    {
                        timeStamp: '2022-06-27T14:28:48+00:00',
                        title: 'Door - front',
                        description: 'Opened by you',
                        type: LogEntityType.Door,
                        state: DoorState.Opened,
                    },
                    {
                        timeStamp: '2022-06-25T20:25:48+00:00',
                        title: 'Main lighting',
                        description: 'On',
                        type: LogEntityType.Lighting,
                        state: LightingState.On,
                    },
                    {
                        timeStamp: '2022-06-25T10:25:48+00:00',
                        title: 'Temperature',
                        description: 'below 4°C (3°C)',
                        type: LogEntityType.Temperature,
                    },
                    {
                        timeStamp: '2022-06-25T09:25:48+00:00',
                        title: 'Main lighting',
                        description: 'Off',
                        type: LogEntityType.Lighting,
                        state: LightingState.Off,
                    }
                ],
            },
        ]).pipe(
            delay(2000),
        ).toPromise();
    }
}
