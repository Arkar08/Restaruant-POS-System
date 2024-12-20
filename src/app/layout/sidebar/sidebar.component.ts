import { Component, OnInit } from '@angular/core';
import { menuLists } from '../../utils/constant';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  menuList:any;
  constructor(){}
  ngOnInit(): void {
      this.menuList = menuLists
  }
}
