import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInWineFactComponent } from './logged-in-wine-fact.component';

describe('LoggedInWineFactComponent', () => {
  let component: LoggedInWineFactComponent;
  let fixture: ComponentFixture<LoggedInWineFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInWineFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInWineFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
