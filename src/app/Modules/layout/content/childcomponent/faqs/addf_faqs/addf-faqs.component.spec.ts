import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfFaqsComponent } from './addf-faqs.component';

describe('AddfFaqsComponent', () => {
  let component: AddfFaqsComponent;
  let fixture: ComponentFixture<AddfFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
