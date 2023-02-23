import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlistproductComponent } from './ulistproduct.component';

describe('UlistproductComponent', () => {
  let component: UlistproductComponent;
  let fixture: ComponentFixture<UlistproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlistproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlistproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
