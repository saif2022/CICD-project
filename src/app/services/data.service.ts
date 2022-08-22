import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private dataSource = new BehaviorSubject(null);
    currentData = this.dataSource.asObservable();

    constructor() { }

    changeData(data: any) {
        this.dataSource.next(data);
    }

}
