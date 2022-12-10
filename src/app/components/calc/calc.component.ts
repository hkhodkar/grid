import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  wage: number = 0
  constructor() { }

  calc(inputedData: string) {
    let amount = +inputedData;
    let divider = 50000000;
    let multiple = Math.floor(amount / divider)
    let round = amount % divider;
    if (round > 0 && round * 0.01 > 5000) {
      this.wage = multiple * 5000 + 5000
    } else if (round > 0 && round * 0.01 < 1000) {
      this.wage = multiple * 5000 + 1000
    } else {
      this.wage = multiple * 5000 + round * 0.01
    }
  }

}
