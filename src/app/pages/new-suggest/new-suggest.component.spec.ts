import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuggestComponent } from './new-suggest.component';

describe('NewSuggestComponent', () => {
  let component: NewSuggestComponent;
  let fixture: ComponentFixture<NewSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
