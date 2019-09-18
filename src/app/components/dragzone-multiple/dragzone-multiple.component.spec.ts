import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragzoneMultipleComponent } from './dragzone-multiple.component';

describe('DragzoneMultipleComponent', () => {
  let component: DragzoneMultipleComponent;
  let fixture: ComponentFixture<DragzoneMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragzoneMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragzoneMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
