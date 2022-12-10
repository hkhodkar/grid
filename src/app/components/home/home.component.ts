import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/mock-data.service';
import { DataModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'task';
  calculatedInput = 0;
  data: DataModel[] = [];
  constructor(private mockDataService: MockDataService) { }


  ngOnInit(): void {
    this.data = this.mockDataService.getData();
  }

}
