import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalCalcComponent } from './paypal-calc.component';

describe('PaypalCalcComponent', () => {
  let component: PaypalCalcComponent;
  let fixture: ComponentFixture<PaypalCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
