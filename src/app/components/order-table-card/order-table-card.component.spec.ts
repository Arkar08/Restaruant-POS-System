import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTableCardComponent } from './order-table-card.component';

describe('OrderTableCardComponent', () => {
  let component: OrderTableCardComponent;
  let fixture: ComponentFixture<OrderTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTableCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
