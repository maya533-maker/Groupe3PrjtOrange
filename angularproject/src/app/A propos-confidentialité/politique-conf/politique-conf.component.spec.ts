import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfComponent } from './politique-conf.component';

describe('PolitiqueConfComponent', () => {
  let component: PolitiqueConfComponent;
  let fixture: ComponentFixture<PolitiqueConfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueConfComponent]
    });
    fixture = TestBed.createComponent(PolitiqueConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
