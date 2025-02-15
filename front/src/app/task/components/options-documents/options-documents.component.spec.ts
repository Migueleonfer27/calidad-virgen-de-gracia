import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDocumentsComponent } from './options-documents.component';

describe('OptionsDocumentsComponent', () => {
  let component: OptionsDocumentsComponent;
  let fixture: ComponentFixture<OptionsDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
