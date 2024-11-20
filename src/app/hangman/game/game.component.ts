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
  checkEmpty!: boolean 
  checkWordEmpty!: boolean
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
    this.checkEmpty = true
  }

  getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
  }
  
  onSelectWordChange(): string {
    this.checkIfEmpty(this.selectedOption)
    return this.selectedOption
  }

    checkIfEmpty(word: string): boolean {
      this.checkEmpty = word.length > 0 ? false : true
      console.log('this.checkEmpty',this.checkEmpty)
    return this.checkEmpty
  }

  onSelectLetterChange() {
    this. checkIfEmpty(this.selectedLetter)
    console.log(this.selectedLetter)
    return this.selectedLetter
  }
  wordConstruction(): string[] {
    // this.unknownWord = []
    // let randomNumber = this.getRandomInt(1, 4)
    // let message: string
    // switch (this.selectedOption)
    // {
    //   case 'Food':
    //     message = this.food[randomNumber]
    //     this.selectedWord = message
    //     // return message;
    //     break;
      
    //   case 'Animal':
    //     message = this.animal[randomNumber]
    //     this.selectedWord = message
    //     // return message
    //     break;
      
    //   case 'Country':
    //     message = this.country[randomNumber]
    //     this.selectedWord = message
    //     // return message
    //     break;
      
    //   default:
    //     message = 'Unknown word'
    //     break
    // }
    let word = this.getWord()
    this.setUnknownWord(word)
    this.checkIfEmpty('')
    this.disableWordSelected = true
    this.disableLetterSelect = false
    return this.unknownWord
  }

  getWord(): string {
    this.unknownWord = []
    let randomNumber = this.getRandomInt(1, 4)
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
    return message
  }
  
  setUnknownWord(word:string): string[] {
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
    this.selectedLetter = ''; 
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
    this.checkIfEmpty('')
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

