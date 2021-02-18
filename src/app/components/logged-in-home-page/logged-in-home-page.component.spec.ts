import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInHomePageComponent } from './logged-in-home-page.component';

describe('LoggedInHomePageComponent', () => {
  let component: LoggedInHomePageComponent;
  let fixture: ComponentFixture<LoggedInHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
