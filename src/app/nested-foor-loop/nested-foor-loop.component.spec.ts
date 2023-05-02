import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFoorLoopComponent } from './nested-foor-loop.component';

describe('NestedFoorLoopComponent', () => {
  let component: NestedFoorLoopComponent;
  let fixture: ComponentFixture<NestedFoorLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFoorLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFoorLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
