import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCategoriesComponent } from './options-categories.component';

describe('OptionsCategoriesComponent', () => {
  let component: OptionsCategoriesComponent;
  let fixture: ComponentFixture<OptionsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
