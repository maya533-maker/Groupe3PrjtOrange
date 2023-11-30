import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieBoutiqueComponent } from './categorie-boutique.component';

describe('CategorieBoutiqueComponent', () => {
  let component: CategorieBoutiqueComponent;
  let fixture: ComponentFixture<CategorieBoutiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieBoutiqueComponent]
    });
    fixture = TestBed.createComponent(CategorieBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
