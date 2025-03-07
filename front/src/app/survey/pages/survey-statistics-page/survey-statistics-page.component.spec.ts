import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStatisticsPageComponent } from './survey-statistics-page.component';

describe('SurveyStatisticsPageComponent', () => {
  let component: SurveyStatisticsPageComponent;
  let fixture: ComponentFixture<SurveyStatisticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyStatisticsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
