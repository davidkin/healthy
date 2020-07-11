import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerquestionPages } from './perquestion.pages';

describe('PerquestionComponent', () => {
  let component: PerquestionPages;
  let fixture: ComponentFixture<PerquestionPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerquestionPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerquestionPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
