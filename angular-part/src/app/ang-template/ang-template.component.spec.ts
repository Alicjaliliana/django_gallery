import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTemplateComponent } from './ang-template.component';

describe('AngTemplateComponent', () => {
  let component: AngTemplateComponent;
  let fixture: ComponentFixture<AngTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
