import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDocumentsComponent } from './card-documents.component';

describe('CardDocumentsComponent', () => {
  let component: CardDocumentsComponent;
  let fixture: ComponentFixture<CardDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
