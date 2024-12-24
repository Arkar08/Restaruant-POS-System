
import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from "../../components/payment/payment.component";
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { OrderCardComponent } from "../../components/order-card/order-card.component";
import { NgFor } from '@angular/common';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-orders',
  imports: [PaymentComponent, MatCardModule, MatButtonModule, MatIconModule, OrderCardComponent,NgFor],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  fruits = ["Apple", "Banana", "Orange", "Grape", "Mango",'arkar','mama','mgmg'];
    constructor(private service:ApiService){}
    ngOnInit(): void {
        this.getData()
    }
    currentIndex:number = 0;
    itemIndex:number = 0;
    clickIndex(step:any){
      const totalslide = this.fruits.length;
      this.currentIndex += step;
      if (this.currentIndex < 0) {
        this.currentIndex = totalslide - 1; 
      } else if (this.currentIndex >= totalslide) {
        this.currentIndex = 0; 
      }      
    }

    handleClick(item:any){
      const total = this.fruits.length;
      this.itemIndex += item;
      if(this.itemIndex < 0){
        this.itemIndex = total - 1
      }else if(this.itemIndex >= total){
        this.itemIndex = 0;
      }
    }

    getData(){
      this.service.getData().subscribe((res:any)=>{
        console.log(res)
      },error=>{
        console.log(error)
      })
    }
}
