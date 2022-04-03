import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CalculateScoreService} from '../calculate-score.service'
import { Answer } from '../model';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})

export class Page3Component implements OnInit {

  radioButtonClicked: boolean;
  correctAnswer:string = 'Scotland';
  userAnswer:string = '';
  totalScore:number = 5;

  constructor(private router:Router, private calService:CalculateScoreService) { 
    this.radioButtonClicked = false;
  }

  ngOnInit(): void {
  }


  goToPage2() {
    this.router.navigate(['page2']);
  }

  goToPage4() {
    if(this.userAnswer ){
      let answer = new Answer();
      answer.pageNumber = '2';
      answer.correctAnswer =  this.correctAnswer;
      answer.userAnswer = this.userAnswer;
      this.calService.addAnswer(answer);
      //alert('Your answer is ' + this.userAnswer);
      alert('The right answer is ' + this.correctAnswer);
      var newUserAnswer = this.userAnswer;
      var newCorrectAnswer = this.correctAnswer;
      /*if (newUserAnswer != newCorrectAnswer) {
        //alert('Sorry, you are incorrect.');
      } else {
        //alert('Amazing. Keep it up!');

      }
      */
      
      this.router.navigate(['page4']);
    }else{
      alert("Please select an option");
    }

  }
}
