import { Component } from '@angular/core';
import { CategoryComponent } from "../../components/category/category.component";
import { ProductsComponent } from "../../components/products/products.component";

@Component({
  selector: 'app-foods',
  imports: [CategoryComponent, ProductsComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {

}
