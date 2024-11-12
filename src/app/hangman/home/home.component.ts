import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  goToGame() {
    this.router.navigate(['/app-game']);
  }

}
