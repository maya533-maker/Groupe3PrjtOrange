import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueVentComponent } from './politique-vent.component';

describe('PolitiqueVentComponent', () => {
  let component: PolitiqueVentComponent;
  let fixture: ComponentFixture<PolitiqueVentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueVentComponent]
    });
    fixture = TestBed.createComponent(PolitiqueVentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
