import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintHomeComponent } from './print-home.component';

describe('PrintHomeComponent', () => {
  let component: PrintHomeComponent;
  let fixture: ComponentFixture<PrintHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
