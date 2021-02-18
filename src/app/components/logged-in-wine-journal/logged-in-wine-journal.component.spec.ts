import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInWineJournalComponent } from './logged-in-wine-journal.component';

describe('LoggedInWineJournalComponent', () => {
  let component: LoggedInWineJournalComponent;
  let fixture: ComponentFixture<LoggedInWineJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInWineJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInWineJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
