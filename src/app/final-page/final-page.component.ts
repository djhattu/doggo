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

  constructor(private router:Router, private calService:CalculateScoreService) { }
 
  
  ngOnInit(): void {

   
    this.answers = this.calService.getAnswers();

 
      if(this.calService.getAnswers()){
      this.calService.getAnswers().forEach( (element) => {
         document.write( "page #" + element.pageNumber + " element user answer: " + element.userAnswer + " correct answer: "  + element.correctAnswer  )
 
        });
        //document.write(this.userName);
      
     }
  
  }

  
 
  goBackToHome() {
  
      this.calService.clearAnswer();
      this.router.navigate(['homePage']);
    } 
  
  
}