import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.scss']
})
export class Page11Component implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

    goToPage12() {
      this.router.navigate(['ratequizpage'])
    }

    calculate(){
      alert("...");
    }
}
