import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewservicerequestsComponent } from './viewservicerequests.component';

describe('ViewservicerequestsComponent', () => {
  let component: ViewservicerequestsComponent;
  let fixture: ComponentFixture<ViewservicerequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewservicerequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewservicerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
