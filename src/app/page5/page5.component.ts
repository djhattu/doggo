import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Answer } from '../model';
import { CalculateScoreService } from '../calculate-score.service';


@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})

  export class Page5Component implements OnInit {
radioButtonClicked:boolean;
correctAnswer:string = 'Labrador';
userAnswer:string = '';


 constructor(private router:Router, private calService:CalculateScoreService) { 
   this.radioButtonClicked = false;

 }

  ngOnInit(): void {

  }




  goToPage6() {
    if(this.userAnswer) {
    let answer = new Answer();
      answer.pageNumber = '4';
      answer.userAnswer = this.userAnswer;
      answer.correctAnswer = this.correctAnswer; 
      this.calService.addAnswer(answer);
    alert("The right answer is " + this.correctAnswer);
    /*
    if(this.userAnswer != this.correctAnswer) {
      alert("Dang it. Get em' next time.");
    } else {
      alert("Fabuluous. You're Almost Finished!");
    } 
    */
    this.router.navigate(['page6']);
  } else {
    alert('Please select an option.');
  }
  }
}


