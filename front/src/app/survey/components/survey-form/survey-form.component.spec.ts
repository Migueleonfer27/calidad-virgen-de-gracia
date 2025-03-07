import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
