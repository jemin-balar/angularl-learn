import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuablecomponentsComponent } from './resuablecomponents.component';

describe('ResuablecomponentsComponent', () => {
  let component: ResuablecomponentsComponent;
  let fixture: ComponentFixture<ResuablecomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuablecomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuablecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
