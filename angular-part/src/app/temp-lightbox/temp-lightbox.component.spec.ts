import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempLightboxComponent } from './temp-lightbox.component';

describe('TempLightboxComponent', () => {
  let component: TempLightboxComponent;
  let fixture: ComponentFixture<TempLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
