import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLayoutComponent } from './alert-layout.component';

describe('AlertLayoutComponent', () => {
  let component: AlertLayoutComponent;
  let fixture: ComponentFixture<AlertLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
