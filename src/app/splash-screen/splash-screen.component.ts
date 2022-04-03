import { MatButtonModule } from '@angular/material/button';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit {

  windowWidth: string = '';
  showSplash:boolean = true;
  opacityChange: number = 1;
  splashTransition: string = '';

  @Input() animationDuration: number = 0.5;
  @Input() visibleDuration: number = 3;
  @Input() animationtype: SplashAnimationType = SplashAnimationType.FadeOut;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      let transitionStyle = '';

      switch(this.animationtype) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
        case SplashAnimationType.SlideRigtht: 
          this.windowWidth = '+' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity' + this.animationDuration + 's';
          this.opacityChange = 0;
          break;
        default:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
      }

      this.splashTransition = transitionStyle;
      setTimeout(() => {
        this.goToStartPage();
      })

  }, this.animationDuration * 5000)
  }

  goToStartPage() {
    this.router.navigate(['homePage']);
  
  }
  
  }
  

