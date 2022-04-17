import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CalculateScoreService } from '../calculate-score.service';
import { Answer } from '../model';


@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent  implements OnInit {

  answers: Answer[] = [];
  userName: string  = '';
  userAnswer: Answer[] = [];
  correctAnswer: Answer[] = [];
  totalScore: number = 0;

  constructor(private router:Router, private calService:CalculateScoreService) { }
 
  
  ngOnInit(): void {

   
    this.answers = this.calService.getAnswers();
    this.totalScore = this.calService.getTotalScore();
  
  }

  
 
  goBackToHome() {
  
      this.calService.clearAnswer();
      this.router.navigate(['homePage']);
    } 
  
  
}