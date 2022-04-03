import { Injectable } from '@angular/core';
import { Answer } from './model';


@Injectable({
  providedIn: 'root'
})



export class CalculateScoreService {


  answers: Answer[] = [];
  userName: string = '';
  totalScore:number = 5;
  inCorrectAnswer:number = 0;
  correctAnswer: Answer[] = [];
  totalAnswers: number = 0;

  // correctAnswer:Answers[] = ['Poodle', 'Scotland', 'Border Collie', 'Labrador', 'German Shepherd'];

  constructor() {
  
   }

   
   //Get and Setter Methods for retrieving the user's name.
 
  
  addAnswer(answer:Answer){
    this.answers.push(answer);
  }

  clearAnswer() {
    this.answers = [];
    return this.answers;
  }


  getAnswers() {
    return this.answers;
  }
  
  getTotalAnswers() {
    return this.totalAnswers;
  }
  
  setTotalAnswers() {
    this.totalAnswers = this.totalAnswers + 1;
  }
  correctAnswers() {
    return this.correctAnswer;
  }


  

  }


  


