import { Component } from '@angular/core';
import { PaymentComponent } from "../../components/payment/payment.component";
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-orders',
  imports: [PaymentComponent,MatCardModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
