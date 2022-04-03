import { Component, OnInit } from '@angular/core';
import  {Router } from '@angular/router';
import { Answer } from '../model';
import { CalculateScoreService } from '../calculate-score.service';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
 
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }
@Component({
  selector: 'app-page6',
 templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})

export class Page6Component implements OnInit {
  radioButtonClicked:boolean;
  correctAnswer:string = 'German Shepherd';
  userAnswer:string = '';
  
  constructor(private router:Router, private calService:CalculateScoreService) {
    this.radioButtonClicked = false;
   }

  ngOnInit(): void {
  }

function() {
  var date  = new Date();
  var seconds = date.getSeconds();
}



goToCalculate() {
  if(this.userAnswer) {
  let answer = new Answer();
  answer.pageNumber = '5';
  answer.correctAnswer =  this.correctAnswer;
  answer.userAnswer = this.userAnswer;
  this.calService.addAnswer(answer);
  alert("The right answer is " + this.correctAnswer);
  
  /*
  if(answer.userAnswer != answer.correctAnswer) {
    alert("So close to perfection, yet still so very far");
  } else {
    alert("Wowza, great choice for a difficult question!");
  } 
  */
  this.router.navigate(['finalPage']);
} else {
  alert('Please select an option.');
    }
  };
}