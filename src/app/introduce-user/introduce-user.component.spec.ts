import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceUserComponent } from './introduce-user.component';

describe('IntroduceUserComponent', () => {
  let component: IntroduceUserComponent;
  let fixture: ComponentFixture<IntroduceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
