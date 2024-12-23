import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OrderItemsComponent } from "../order-items/order-items.component";
import { PaymentSummaryComponent } from '../payment-summary/payment-summary.component';
import { PaymentTypeComponent } from '../payment-type/payment-type.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment',
  imports: [MatIconModule, OrderItemsComponent,PaymentSummaryComponent,PaymentTypeComponent,MatButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
