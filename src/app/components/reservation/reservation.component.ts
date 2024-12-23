import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OrderTableCardComponent } from "../order-table-card/order-table-card.component";

@Component({
  selector: 'app-reservation',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, OrderTableCardComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

}
