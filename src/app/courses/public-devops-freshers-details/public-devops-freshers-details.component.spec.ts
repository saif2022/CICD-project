import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDevopsFreshersDetailsComponent } from './public-devops-freshers-details.component';

describe('PublicDevopsFreshersDetailsComponent', () => {
  let component: PublicDevopsFreshersDetailsComponent;
  let fixture: ComponentFixture<PublicDevopsFreshersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDevopsFreshersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDevopsFreshersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
