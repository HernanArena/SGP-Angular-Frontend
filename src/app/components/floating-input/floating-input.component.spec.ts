import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInputComponent } from './floating-input.component';

describe('FloatingInputComponent', () => {
  let component: FloatingInputComponent;
  let fixture: ComponentFixture<FloatingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
