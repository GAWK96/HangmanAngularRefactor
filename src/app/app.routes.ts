import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './hangman/game/game.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './hangman/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'app-game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }