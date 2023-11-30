import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamonoSchoolComponent } from './jamono-school.component';

describe('JamonoSchoolComponent', () => {
  let component: JamonoSchoolComponent;
  let fixture: ComponentFixture<JamonoSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JamonoSchoolComponent]
    });
    fixture = TestBed.createComponent(JamonoSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
