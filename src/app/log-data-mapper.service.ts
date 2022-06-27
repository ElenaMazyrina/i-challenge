import { Injectable } from '@angular/core';
import { ILogData } from './interfaces/i-log-data';
import { ILogDataMapped } from './interfaces/i-log-data-mapped';

@Injectable()
export class LogDataMapperService {
    public mapData(data: ILogData[]): ILogDataMapped[] {
        return data
            .map((v) => {
                return {
                    ...v,
                    timestamp: new Date(v.timeStamp),
                };
            }).sort((a, b) => {
                return +(b.timeStamp) - +(a.timeStamp);
            }).reduce((acc, item) => {
                const index = acc.findIndex((v) => v.date === item.timestamp);

                if (index !== -1) {
                    acc[index].data = [
                        ...acc[index].data,
                        item,
                    ];
                } else {
                    acc.push({
                        date: item.timestamp,
                        data: [item],
                    });
                }

                return acc as ILogDataMapped[];
            }, [] as ILogDataMapped[]);
    }
}
