import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  imports: [FormsModule, NgFor, NgIf]
})
export class GameComponent implements OnInit {

  constructor(private router: Router) { }


  options: string[] = ['Food', 'Animal', 'Country']
  letters: string[] = [
  '','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  food: string[] = ['BANANA', 'BREAD', 'MEAT', 'MILK'];
  animal: string[] = ['DOG', 'CAT', 'BIRD', 'COW'];
  country: string[] = ['USA', 'BRAZIL', 'ANGOLA', 'FRANCE'];
  selectedOption: string = ''
  selectedWord: string = ''
  selectedLetter: string = ''
  lettersSelected: string[] = []
  unknownWord: string[] = []
  disableWordSelected: boolean = false
  disableLetterSelect!: boolean 
  letterMatch: number = 0
  count: number = 0
  baseImageUrl: string = 'assets/HANG'
  checkIfGuessed: boolean = false
  stillPlaying!: boolean
  checkLetter: boolean = true
  ngOnInit()
  {
    this.stillPlaying = true  
    this.disableLetterSelect = true
  }

  getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
  }
  
  onSelectWordChange(): string {
    // console.log(this.selectedOption)
    return this.selectedOption
  }
  onSelectLetterChange() {
    console.log(this.selectedLetter)
    return this.selectedLetter
  }

  // setBlankSpace(): string {
  //   if (this.selectedLetter) {
  //     return this.selectedLetter = ''
  //   }
  //   return this.selectedLetter
  // }
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
    // console.log(message)
    this.constructUnkownWord(message)
    // console.log(this.unknownWord)
    this.disableWordSelected = true
    this.disableLetterSelect = false
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
    this.updateUnknownWord()
    this.checkIfLetterMatch(this.letterMatch)
    this.updateSelectedLetters(this.selectedLetter)
    this.unknownWord = [...this.unknownWord];
    this.checkIfWordWasGuessed(this.unknownWord)
    this.letterMatch = 0
    setTimeout(() => {
    this.selectedLetter = ''; // Reset the selection
  }, 0);
    return this.unknownWord
  }
  updateUnknownWord() {
    for (var i: number = 0; i < this.unknownWord.length; i++) {
    // var updateUnknownWord = this.unknownWord
    if (this.selectedWord.charAt(i) === this.selectedLetter)
    {
      this.unknownWord[i] = this.selectedLetter
      this.letterMatch = this.letterMatch + 1
    }
    }
  }
  checkIfWordWasGuessed(array: string[]): boolean {
    this.checkIfGuessed = array.includes('_')
    this.stillPlaying = this.checkIfGuessed ? true : false
    return this.checkIfGuessed
  }

  updateSelectedLetters(letter: string): string[] {
    this.lettersSelected.push(letter)
    // console.log(this.lettersSelected)
    return this.lettersSelected
  } 
  checkIfLetterMatch(value: number): number{
    if (value == 0)
    {
      this.count = this.count + 1
      console.log(this.count)
      return (this.count)
    }
    else
    {
      console.log(this.count)
      return this.count
    }
  }

  isLetterDisabled(letter: string): boolean{
    this.checkLetter = this.lettersSelected.includes(letter)
    return this.checkLetter;
  }

  reloadPage() {
    window.location.reload();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  }

