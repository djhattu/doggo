import { Injectable } from '@angular/core';
import { Answer } from './model';


@Injectable({
  providedIn: 'root'
})



export class CalculateScoreService {


  answers: Answer[] = [];
  userName: string = '';
  totalScore:number = 0;
  inCorrectAnswer:number = 0;
  correctAnswer: Answer[] = [];
  totalAnswers: number = 0;

  // correctAnswer:Answers[] = ['Poodle', 'Scotland', 'Border Collie', 'Labrador', 'German Shepherd'];

  constructor() {
  
   }

   
   //Get and Setter Methods for retrieving the user's name.
 
  
  addAnswer(answer:Answer){
    this.answers.push(answer);
    if(answer.correctAnswer == answer.userAnswer){
      this.totalScore++;
    }
  }
  addUserName(name:string) {
    this.userName = name;
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


  

  }


  


