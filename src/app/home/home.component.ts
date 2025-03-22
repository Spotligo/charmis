import { Component } from '@angular/core';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.css']
})

export class HomeComponent {
  constructor(private router: Router) {}
  
  gotoHome(){
    this.router.navigate([], { fragment: 'home' });
 } 
  gotoPayment(){
    this.router.navigate([], { fragment: 'payment' });
 } 
}
