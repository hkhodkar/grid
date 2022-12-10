import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataMock } from './data-mock';
import { DataMapper } from './data.maper';
import { DataModel } from './models/data.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {


  }
  getData() {
    let a: DataModel[] = []
    dataMock.map(item => {
      a.push(DataMapper(item))
    })
    return a;
  }
}
