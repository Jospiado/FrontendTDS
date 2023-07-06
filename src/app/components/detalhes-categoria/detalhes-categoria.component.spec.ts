import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCategoriaComponent } from './detalhes-categoria.component';

describe('DetalhesCategoriaComponent', () => {
  let component: DetalhesCategoriaComponent;
  let fixture: ComponentFixture<DetalhesCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
