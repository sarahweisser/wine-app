import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineFoodQuizComponent } from './wine-food-quiz.component';

describe('WineFoodQuizComponent', () => {
  let component: WineFoodQuizComponent;
  let fixture: ComponentFixture<WineFoodQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineFoodQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineFoodQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
