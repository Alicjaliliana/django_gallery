import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempVerticalComponent } from './temp-vertical.component';

describe('TempVerticalComponent', () => {
  let component: TempVerticalComponent;
  let fixture: ComponentFixture<TempVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
