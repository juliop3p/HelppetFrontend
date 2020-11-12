import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProdutoComponent } from './put-produto.component';

describe('PutProdutoComponent', () => {
  let component: PutProdutoComponent;
  let fixture: ComponentFixture<PutProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
