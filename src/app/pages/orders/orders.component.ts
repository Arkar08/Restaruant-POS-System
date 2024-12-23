import { Component } from '@angular/core';
import { PaymentComponent } from "../../components/payment/payment.component";
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { OrderCardComponent } from "../../components/order-card/order-card.component";

@Component({
  selector: 'app-orders',
  imports: [PaymentComponent, MatCardModule, MatButtonModule, MatIconModule, OrderCardComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
