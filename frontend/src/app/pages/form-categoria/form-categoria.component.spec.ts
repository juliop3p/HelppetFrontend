import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriaComponent } from './form-categoria.component';

describe('FormCategoriaComponent', () => {
  let component: FormCategoriaComponent;
  let fixture: ComponentFixture<FormCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
