import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnittestingComponent } from './unittesting.component';

describe('UnittestingComponent', () => {
  let component: UnittestingComponent;
  let fixture: ComponentFixture<UnittestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnittestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnittestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
