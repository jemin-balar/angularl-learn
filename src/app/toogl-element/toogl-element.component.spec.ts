import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglElementComponent } from './toogl-element.component';

describe('TooglElementComponent', () => {
  let component: TooglElementComponent;
  let fixture: ComponentFixture<TooglElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooglElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooglElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
