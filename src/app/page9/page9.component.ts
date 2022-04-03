import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.scss']
})
export class Page9Component implements OnInit {
  radioButtonClicked: boolean;
  correctAnswer:string = 'correctanswereight';
  
  constructor(private router: Router) { 
    this.radioButtonClicked = false;
  }
  ngOnInit(): void {
  }

  goToPage10() {
    this.router.navigate(['page10'])
  }
  OnClick(){
    this.radioButtonClicked = true;
  }
}
