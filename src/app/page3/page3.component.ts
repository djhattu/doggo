import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CalculateScoreService} from '../calculate-score.service'
import { Answer } from '../model';
import { interval } from 'rxjs';
import { MatCard } from '@angular/material/card';

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
  data: number = 0; 
  message:string = '';
  constructor(private router:Router, private calService:CalculateScoreService) { 
    this.radioButtonClicked = false;
  }

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      //console.log(d);
      this.data = d;
      if(this.data >= 10) {
        this.data = 0;
        this.message = "TIME'S UP!";
        this.userAnswer = 'N/A';
      }
    })
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
