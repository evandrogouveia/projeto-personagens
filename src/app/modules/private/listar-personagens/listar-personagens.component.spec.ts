import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonagensComponent } from './listar-personagens.component';

describe('ListarPersonagensComponent', () => {
  let component: ListarPersonagensComponent;
  let fixture: ComponentFixture<ListarPersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPersonagensComponent]
    });
    fixture = TestBed.createComponent(ListarPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
