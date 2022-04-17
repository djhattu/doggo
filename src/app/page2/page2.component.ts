import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { interval } from 'rxjs';
import { CalculateScoreService } from '../calculate-score.service';
import { Answer } from '../model';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  radioButtonClicked: boolean;

   correctAnswer:string = 'Poodle';
   userAnswer:string = '';
   totalScore: number = 5;
   answers:number = 0;

  // correctAnswer:string = 'correctanswerone';
    title = 'toolsets';
    data: number = 0; 
    message: string = ' ';
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
  goToPage3(){
    let answer = new Answer();
    answer.pageNumber = '1';
    //answer.answer = this.answers
    answer.correctAnswer =  this.correctAnswer;
    answer.userAnswer = this.userAnswer;
    this.calService.addAnswer(answer);
    //alert('Your answer is ' + this.userAnswer)
    var newUserAnswer = this.userAnswer;
    var newCorrectAnswer = this.correctAnswer;
    if(this.userAnswer ){
      if (newUserAnswer != newCorrectAnswer) {
        
        var incorrectMessage = 'Aw Shucks, you were so close!';
       // document.getElementById('printMessage').innerHTML = incorrectMessage + this.correctAnswer;

      } else {
        var correctMessage = 'Ruff Ruff. Fantastic';
      }
      this.router.navigate(['page3']);
    }else{
      alert("Please select an option");
    }
 }

}