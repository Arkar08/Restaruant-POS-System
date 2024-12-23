import { Component } from '@angular/core';
import { ReservationComponent } from "../../components/reservation/reservation.component";
import { TableDesignComponent } from '../../components/table-design/table-design.component';

@Component({
  selector: 'app-table',
  imports: [ReservationComponent,TableDesignComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
