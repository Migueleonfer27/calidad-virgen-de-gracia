import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRoleComponent } from './form-role-dialog.component';

describe('FormRoleComponent', () => {
  let component: FormRoleComponent;
  let fixture: ComponentFixture<FormRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
