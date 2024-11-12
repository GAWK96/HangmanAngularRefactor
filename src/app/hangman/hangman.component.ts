import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [HomeComponent, GameComponent, FormsModule, CommonModule, NgFor],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {

}
