import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedefaultComponent } from './pagedefault.component';

describe('PagedefaultComponent', () => {
  let component: PagedefaultComponent;
  let fixture: ComponentFixture<PagedefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
