import { Component } from '@angular/core';
import { OrderTableComponent } from "../order-table/order-table.component";


@Component({
  selector: 'app-table-design',
  imports: [OrderTableComponent],
  templateUrl: './table-design.component.html',
  styleUrl: './table-design.component.css'
})
export class TableDesignComponent {

}
