import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPortalHomeComponent } from './event-portal-home.component';

describe('EventPortalHomeComponent', () => {
  let component: EventPortalHomeComponent;
  let fixture: ComponentFixture<EventPortalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPortalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPortalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
