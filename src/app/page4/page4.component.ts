import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Answer } from '../model';
import { CalculateScoreService } from '../calculate-score.service';
import { interval } from 'rxjs';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

 radioButtonClicked: boolean;
 correctAnswer:string = 'Border Collie';
 userAnswer:string = '';
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