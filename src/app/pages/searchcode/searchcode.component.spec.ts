import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcodeComponent } from './searchcode.component';

describe('SearchcodeComponent', () => {
  let component: SearchcodeComponent;
  let fixture: ComponentFixture<SearchcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
