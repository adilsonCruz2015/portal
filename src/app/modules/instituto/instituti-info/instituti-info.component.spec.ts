import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutiInfoComponent } from './instituti-info.component';

describe('InstitutiInfoComponent', () => {
  let component: InstitutiInfoComponent;
  let fixture: ComponentFixture<InstitutiInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutiInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
