import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamonoMaxComponent } from './jamono-max.component';

describe('JamonoMaxComponent', () => {
  let component: JamonoMaxComponent;
  let fixture: ComponentFixture<JamonoMaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JamonoMaxComponent]
    });
    fixture = TestBed.createComponent(JamonoMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
