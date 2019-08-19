import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboModuloObjetoComponent } from './combo-modulo-objeto.component';

describe('ComboModuloObjetoComponent', () => {
  let component: ComboModuloObjetoComponent;
  let fixture: ComponentFixture<ComboModuloObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboModuloObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboModuloObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
