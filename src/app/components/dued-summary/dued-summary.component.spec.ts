import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuedSummaryComponent } from './dued-summary.component';

describe('DuedSummaryComponent', () => {
  let component: DuedSummaryComponent;
  let fixture: ComponentFixture<DuedSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuedSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
