import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewproductComponent } from './createnewproduct.component';

describe('CreatenewproductComponent', () => {
  let component: CreatenewproductComponent;
  let fixture: ComponentFixture<CreatenewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
