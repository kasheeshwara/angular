import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListservicerequestsComponent } from './listservicerequests.component';

describe('ListservicerequestsComponent', () => {
  let component: ListservicerequestsComponent;
  let fixture: ComponentFixture<ListservicerequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListservicerequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListservicerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
