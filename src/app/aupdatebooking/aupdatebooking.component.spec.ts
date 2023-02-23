import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdatebookingComponent } from './aupdatebooking.component';

describe('AupdatebookingComponent', () => {
  let component: AupdatebookingComponent;
  let fixture: ComponentFixture<AupdatebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupdatebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AupdatebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
