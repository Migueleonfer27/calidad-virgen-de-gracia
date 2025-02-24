import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOptionsComponent } from './radio-options.component';

describe('RadioOptionsComponent', () => {
  let component: RadioOptionsComponent;
  let fixture: ComponentFixture<RadioOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
