import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionButtonComponent } from './solution-button.component';

describe('SolutionButtonComponent', () => {
  let component: SolutionButtonComponent;
  let fixture: ComponentFixture<SolutionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
