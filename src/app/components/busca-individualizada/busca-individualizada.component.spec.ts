import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaIndividualizadaComponent } from './busca-individualizada.component';

describe('BuscaIndividualizadaComponent', () => {
  let component: BuscaIndividualizadaComponent;
  let fixture: ComponentFixture<BuscaIndividualizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaIndividualizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaIndividualizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
