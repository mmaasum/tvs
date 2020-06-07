import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWorksComponent } from './featured-works.component';

describe('FeaturedWorksComponent', () => {
  let component: FeaturedWorksComponent;
  let fixture: ComponentFixture<FeaturedWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
