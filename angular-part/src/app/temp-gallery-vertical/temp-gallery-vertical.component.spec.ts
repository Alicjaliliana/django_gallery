import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGalleryVerticalComponent } from './temp-gallery-vertical.component';

describe('TempGalleryVerticalComponent', () => {
  let component: TempGalleryVerticalComponent;
  let fixture: ComponentFixture<TempGalleryVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempGalleryVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGalleryVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
