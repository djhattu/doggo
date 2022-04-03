import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {

  radioButtonClicked: boolean;
  correctAnswer:string = 'correctanswersix';

  constructor(private router:Router) {
    this.radioButtonClicked= false;
   }

  ngOnInit(): void {
  }
  goToPage8() {
    this.router.navigate(['page8'])
  }
  OnClickRadio() {
    this.radioButtonClicked = true;
  }

}
