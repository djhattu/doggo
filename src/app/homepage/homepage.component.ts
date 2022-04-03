import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MatCardModule } from '@angular/material/card';

import { CalculateScoreService } from '../calculate-score.service';


@NgModule({
  imports: [
  
  ],
  declarations: [ ],
  bootstrap: [ ]
})



export class AppModule { }
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    animations: [
    
    ]
})

export class HomepageComponent implements OnInit {
  
  todayNumber:number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();
  userAnswer:string = ' ';
  promptedName:string = ' ';
  userName:string = '';

  constructor(private router:Router, private calService:CalculateScoreService) { }

  ngOnInit(): void {

  }
  /*let answer = new Answer();
  answer.pageNumber = '1';
  answer.correctAnswer =  this.correctAnswer;
  answer.userAnswer = this.userAnswer;
  this.calService.addAnswer(answer);
  //alert('Your answer is ' + this.userAnswer)
  var newUserAnswer = this.userAnswer;
  var newCorrectAnswer = this.correctAnswer;
  */



  goToPageOne(){
    //this.router.navigate(['splash-screen']);
    this.router.navigate(['page2']);
  }

  askName() {
    //promptedName = document.getElementById('textBox');
    this.userName = "Kanwar";
    const newName = this.userName;
    // this.calService.addUserName(newName);
    var message = "Hello";
    const totalMessage = alert(message + ' ' + newName);

  }
  
 
  goToSocials() {
    //location.href = "url";
  }
}
