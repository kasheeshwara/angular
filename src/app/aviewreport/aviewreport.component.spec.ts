import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviewreportComponent } from './aviewreport.component';

describe('AviewreportComponent', () => {
  let component: AviewreportComponent;
  let fixture: ComponentFixture<AviewreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviewreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
