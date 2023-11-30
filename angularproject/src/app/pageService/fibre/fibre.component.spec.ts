import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibreComponent } from './fibre.component';

describe('FibreComponent', () => {
  let component: FibreComponent;
  let fixture: ComponentFixture<FibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibreComponent]
    });
    fixture = TestBed.createComponent(FibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
