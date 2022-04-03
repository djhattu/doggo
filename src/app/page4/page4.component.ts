import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Answer } from '../model';
import { CalculateScoreService } from '../calculate-score.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

radioButtonClicked: boolean;
correctAnswer:string = 'Border Collie';
userAnswer:string = '';

 constructor(private router:Router, private calService:CalculateScoreService) { 
   this.radioButtonClicked = false;
 }

  ngOnInit(): void {

  }
  


  goToPage5() {
    if(this.userAnswer ){
      let answer = new Answer();
      answer.pageNumber = '3';
      answer.correctAnswer =  this.correctAnswer;
      answer.userAnswer = this.userAnswer;
      this.calService.addAnswer(answer);
      //alert('Your answer is ' + this.userAnswer);
      alert('The right answer is ' + this.correctAnswer);
      var newUserAnswer = this.userAnswer;
     var newCorrectAnswer = this.correctAnswer;
      /*
      if (newUserAnswer != newCorrectAnswer) {
        alert('Aww shucks, what a drag. You were so close.');
      } else {
        alert('Not bad. You are correct');
      }
      */
      this.router.navigate(['page5']);
      }else{
        alert("Please select an option");
      }

    } 
  }