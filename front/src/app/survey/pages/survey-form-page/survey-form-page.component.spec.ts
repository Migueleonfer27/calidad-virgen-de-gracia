import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormPageComponent } from './survey-form-page.component';

describe('SurveyFormPageComponent', () => {
  let component: SurveyFormPageComponent;
  let fixture: ComponentFixture<SurveyFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
