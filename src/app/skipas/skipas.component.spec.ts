import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipasComponent } from './skipas.component';

describe('SkipasComponent', () => {
  let component: SkipasComponent;
  let fixture: ComponentFixture<SkipasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
