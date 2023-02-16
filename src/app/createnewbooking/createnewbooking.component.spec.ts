import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewbookingComponent } from './createnewbooking.component';

describe('CreatenewbookingComponent', () => {
  let component: CreatenewbookingComponent;
  let fixture: ComponentFixture<CreatenewbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
