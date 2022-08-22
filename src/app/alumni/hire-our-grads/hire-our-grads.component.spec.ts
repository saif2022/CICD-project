import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireOurGradsComponent } from './hire-our-grads.component';

describe('HireOurGradsComponent', () => {
  let component: HireOurGradsComponent;
  let fixture: ComponentFixture<HireOurGradsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireOurGradsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireOurGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
