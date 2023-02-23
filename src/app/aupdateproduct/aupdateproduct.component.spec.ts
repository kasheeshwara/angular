import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateproductComponent } from './aupdateproduct.component';

describe('AupdateproductComponent', () => {
  let component: AupdateproductComponent;
  let fixture: ComponentFixture<AupdateproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupdateproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
