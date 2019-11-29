import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiViewComponent } from './ski-view.component';

describe('SkiViewComponent', () => {
  let component: SkiViewComponent;
  let fixture: ComponentFixture<SkiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
