import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderChmComponent } from './slider-chm.component';

describe('SliderChmComponent', () => {
  let component: SliderChmComponent;
  let fixture: ComponentFixture<SliderChmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderChmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderChmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
