import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineRegistrationFormComponent } from './wine-registration-form.component';

describe('WineRegistrationFormComponent', () => {
  let component: WineRegistrationFormComponent;
  let fixture: ComponentFixture<WineRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
