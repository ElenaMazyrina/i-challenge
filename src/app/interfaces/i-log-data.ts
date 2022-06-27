import { LogEntityType } from './log-entity-type';
import { DoorState } from './door-state';
import { LightingState } from './lighting-state';

export interface ILogData {
    readonly timeStamp: string;
    readonly title: string;
    readonly description: string;
    readonly type: LogEntityType;
    readonly state?: DoorState | LightingState;
}
