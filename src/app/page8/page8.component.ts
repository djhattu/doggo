import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.scss']
})
export class Page8Component implements OnInit {
  radioButtonClicked:boolean;
  correctAnswer:string = 'correctanswerseven';

  constructor(private router: Router) { 
    this.radioButtonClicked = false;
  }

  ngOnInit(): void {
  }
goToPage9() {
  this.router.navigate
}
  OnClicked() {
    this.radioButtonClicked = true;
  }
}