import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalBuilderComponent } from './professional-builder.component';

describe('ProfessionalBuilderComponent', () => {
  let component: ProfessionalBuilderComponent;
  let fixture: ComponentFixture<ProfessionalBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
