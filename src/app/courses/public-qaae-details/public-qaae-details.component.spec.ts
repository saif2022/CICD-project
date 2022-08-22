import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicQaaeDetailsComponent } from './public-qaae-details.component';

describe('PublicQaaeDetailsComponent', () => {
  let component: PublicQaaeDetailsComponent;
  let fixture: ComponentFixture<PublicQaaeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicQaaeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicQaaeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
