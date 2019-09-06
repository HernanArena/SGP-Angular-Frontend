import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthSidebarComponent } from './rigth-sidebar.component';

describe('RigthSidebarComponent', () => {
  let component: RigthSidebarComponent;
  let fixture: ComponentFixture<RigthSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigthSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
