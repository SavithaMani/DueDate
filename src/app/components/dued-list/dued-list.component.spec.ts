import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuedListComponent } from './dued-list.component';

describe('DuedListComponent', () => {
  let component: DuedListComponent;
  let fixture: ComponentFixture<DuedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
