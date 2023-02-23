import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreportsComponent } from './listreports.component';

describe('ListreportsComponent', () => {
  let component: ListreportsComponent;
  let fixture: ComponentFixture<ListreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
