import { Injectable } from '@angular/core';
import { MatTabHeader } from '@angular/material/tabs';
import { Answer } from './model';


@Injectable({
  providedIn: 'root'
})



export class CalculateScoreService {


  answers: Answer[] = [];
  pages: Answer[] = [];
  pageNumber:string = '';
  totalScore:number = 0;
  correctAnswer: Answer[] = [];
  totalAnswers: number = 0;
  firstPage: number = 2;
  lastPage: number = 5;
  
  // correctAnswer:Answers[] = ['Poodle', 'Scotland', 'Border Collie', 'Labrador', 'German Shepherd'];

  constructor() {
  
   }

   
   //Get and Setter Methods for retrieving the user's name.
 
  
  addAnswer(answer:Answer){
    this.answers.push(answer);
    if(answer.userAnswer === answer.correctAnswer){
      this.totalScore = this.totalScore + 1;
    } 
    if(answer.userAnswer === 'N/A') {
      this.totalScore-=0; 
    }
    
  }


  getTotalScore(){
    return this.totalScore;
  }

  clearAnswer() {
    this.answers = [];
    return this.answers;
  }

  getAnswers() {
    return this.answers;
  }
  
  correctAnswers() {
    return this.correctAnswer;
  }

 

  randomizePage() {
    return this.pages;
  }
}


  


