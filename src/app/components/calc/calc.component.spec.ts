import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    { parameter: '50000000', result: 5000 },
    { parameter: '50200000', result: 7000 },
    { parameter: '45000000', result: 5000 },
    { parameter: '200000', result: 2000 },

  ].forEach((dataSet) => {
    it('calc wage with ' + dataSet.parameter + ' sould be ' + dataSet.result, () => {
      component.calc(dataSet.parameter);
      expect(component.wage).toBe(dataSet.result)
    })
  })
})
