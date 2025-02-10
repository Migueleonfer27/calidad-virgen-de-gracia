import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcategoryDialogComponent } from './edit-subcategory-dialog.component';

describe('EditSubcategoryDialogComponent', () => {
  let component: EditSubcategoryDialogComponent;
  let fixture: ComponentFixture<EditSubcategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubcategoryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubcategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
