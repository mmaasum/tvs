import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesmanDetailComponent } from './tradesman-detail.component';

describe('TradesmanDetailComponent', () => {
  let component: TradesmanDetailComponent;
  let fixture: ComponentFixture<TradesmanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesmanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
