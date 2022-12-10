import { Component, OnInit } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { DataModel } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  calculatedInput = 0;
  data: DataModel[] = [];
  constructor(private mockDataService: MockDataService) { }


  ngOnInit(): void {
    this.data = this.mockDataService.getData();
  }

  calc(input: any) {
    // if (input.value < 100000) return 1000;
  }



}
