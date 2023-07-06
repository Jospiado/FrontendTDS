import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFornecedorComponent } from './list-fornecedor.component';

describe('ListFornecedorComponent', () => {
  let component: ListFornecedorComponent;
  let fixture: ComponentFixture<ListFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
