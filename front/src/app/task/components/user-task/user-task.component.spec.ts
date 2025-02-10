import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskComponent } from './user-task.component';

describe('UserTaskComponent', () => {
  let component: UserTaskComponent;
  let fixture: ComponentFixture<UserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
