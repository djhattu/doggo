import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { interval } from 'rxjs';
import { CalculateScoreService } from '../calculate-score.service';
import { Answer } from '../model';

@Component({
  selector: 'app-introduce-user',
  templateUrl: './introduce-user.component.html',
  styleUrls: ['./introduce-user.component.scss']
})
export class IntroduceUserComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHomePage() {
    this.router.navigate(['splash-screen']);
  }

}
