import { NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  imports: [FormsModule, NgFor]
})
export class GameComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }
  
   ngOnInit() {
  }

  options: string[] = ['Food', 'Animal', 'Country']
  letters: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  food: string[] = ['BANANA', 'BREAD', 'MEAT', 'MILK'];
  animal: string[] = ['DOG', 'CAT', 'BIRD', 'COW'];
  country: string[] = ['USA', 'BRAZIL', 'ANGOLA', 'FRANCE'];
  selectedOption: string = ''
  selectedWord: string = ''
  selectedLetter: string = ''
  unknownWord: string[] = []
  getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
  onSelectWordChange(): string {
    console.log(this.selectedOption)
    return this.selectedOption
  }
  onSelectLetterChange(): string {
    console.log(this.selectedLetter)
    return this.selectedLetter
  }
  getRandomWord(): string[] {
    this.unknownWord = []
    var randomNumber = this.getRandomInt(1, 4)
    let message: string
    switch (this.selectedOption)
    {
      case 'Food':
        message = this.food[randomNumber]
        this.selectedWord = message
        // return message;
        break;
      
      case 'Animal':
        message = this.animal[randomNumber]
        this.selectedWord = message
        // return message
        break;
      
      case 'Country':
        message = this.country[randomNumber]
        this.selectedWord = message
        // return message
        break;
      
      default:
        message = 'Unknown word'
        break
    }
    console.log(message)
    this.constructUnkownWord(message)
    console.log(this.unknownWord)
    return this.unknownWord
  }

  //   getSelectedWord(): string[] {
  //     return ['A','B']
  //  } 
  
  constructUnkownWord(word:string): string[] {
    for (var i = 0; i < word.length; i++)
    {
        this.unknownWord.push('_')
    }
    return this.unknownWord
  }

  checkRandomWord(): string[] {
  for (var i: number = 0; i < this.selectedOption.length; i++) {
    // var updateUnknownWord = this.unknownWord
    if (this.selectedWord.charAt(i) === this.selectedLetter)
    {
      this.unknownWord[i] = this.selectedLetter
    }
    
  }
    console.log(this.unknownWord);
    this.unknownWord = [...this.unknownWord];
    return this.unknownWord
}

}
