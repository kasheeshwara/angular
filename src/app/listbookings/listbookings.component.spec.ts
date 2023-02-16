import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbookingsComponent } from './listbookings.component';

describe('ListbookingsComponent', () => {
  let component: ListbookingsComponent;
  let fixture: ComponentFixture<ListbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
