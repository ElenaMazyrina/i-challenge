import { ILogData } from './i-log-data';

export interface ILog {
    readonly date: string;
    readonly data: ILogData[];
}
