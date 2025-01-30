import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserDialogComponent } from './form-user-dialog.component';

describe('FormUserDialogComponent', () => {
  let component: FormUserDialogComponent;
  let fixture: ComponentFixture<FormUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUserDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
