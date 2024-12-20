import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-single-layout',
  imports: [NavbarComponent, MatSidenavModule, RouterOutlet, SidebarComponent],
  templateUrl: './single-layout.component.html',
  styleUrl: './single-layout.component.css'
})
export class SingleLayoutComponent {

}
