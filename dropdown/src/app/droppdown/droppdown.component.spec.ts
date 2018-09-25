import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppdownComponent } from './droppdown.component';

describe('DroppdownComponent', () => {
  let component: DroppdownComponent;
  let fixture: ComponentFixture<DroppdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
