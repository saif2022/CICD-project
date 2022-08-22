import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutionandfinancingComponent } from './tutionandfinancing.component';

describe('TutionandfinancingComponent', () => {
  let component: TutionandfinancingComponent;
  let fixture: ComponentFixture<TutionandfinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutionandfinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutionandfinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
