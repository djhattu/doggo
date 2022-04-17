import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { AnotherpageComponent} from './anotherpage/anotherpage.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { SplashScreenComponent} from './splash-screen/splash-screen.component'
import {CommonModule, LocationStrategy,HashLocationStrategy } from '@angular/common';
import { IntroduceUserComponent } from './introduce-user/introduce-user.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  }
  ,
  {
    path: 'introduce-user',
    component: IntroduceUserComponent
  },

  {
    path:'page2',
      component:Page2Component
  }
  ,
  {
    path:'page3',
      component:Page3Component
  }
  ,
  {
    path:'page4',
      component:Page4Component
  }
  ,
  {
    path: 'page5',
      component:Page5Component
  }
  ,
  {
    path: 'page6',
      component: Page6Component
  }
  ,
  {
    path: 'page7',
      component: Page7Component
  }
  ,
  {
    path: 'page8',
      component: Page8Component
  }
  ,
  {
    path: 'page9',
      component: Page9Component
  }
  ,
  {
    path: 'page10',
      component: Page10Component
  }
  ,
  {
    path: 'page11',
      component: Page11Component
  }

  ,
  {
    path: 'anotherpage',
      component: AnotherpageComponent
  }

  ,
  {
    path: 'finalPage',
      component: FinalPageComponent
  }

  ,
  {
    path: 'homePage',
      component: HomepageComponent
  },

  {
    path: 'splash-screen',
      component: SplashScreenComponent
  }
  
 
 
  

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
