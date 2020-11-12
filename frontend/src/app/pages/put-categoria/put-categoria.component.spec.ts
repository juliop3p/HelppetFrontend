import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCategoriaComponent } from './put-categoria.component';

describe('PutCategoriaComponent', () => {
  let component: PutCategoriaComponent;
  let fixture: ComponentFixture<PutCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
