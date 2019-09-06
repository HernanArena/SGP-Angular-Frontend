import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFooterComponent } from './results-footer.component';

describe('ResultsFooterComponent', () => {
  let component: ResultsFooterComponent;
  let fixture: ComponentFixture<ResultsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
