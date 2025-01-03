import { Component,OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [MatButtonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['auth/login']);
  }
  cancel(){
    this.router.navigate(['dashboard']);
  }
}
