import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdutoComponent } from './form-produto.component';

describe('FormProdutoComponent', () => {
  let component: FormProdutoComponent;
  let fixture: ComponentFixture<FormProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
