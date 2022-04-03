import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.scss']
})
export class Page10Component implements OnInit {
  radioButtonClicked: boolean;
  correctAnswer:number = 3000000;

  constructor(private router: Router) { 
    this.radioButtonClicked = false;
  }

  ngOnInit(): void {
    
  }
  goToPage11() {
    this.router.navigate(['page11'])
    }
    OnClicked() {
      this.radioButtonClicked = true;
    }
  }


