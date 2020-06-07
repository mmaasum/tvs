import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAchievmentsComponent } from './our-achievments.component';

describe('OurAchievmentsComponent', () => {
  let component: OurAchievmentsComponent;
  let fixture: ComponentFixture<OurAchievmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAchievmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAchievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
