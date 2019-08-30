import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAutocompleteComponent } from './angular-autocomplete.component';

describe('AngularAutocompleteComponent', () => {
  let component: AngularAutocompleteComponent;
  let fixture: ComponentFixture<AngularAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
