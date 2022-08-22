import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDataanalistDetailsComponent } from './public-dataanalist-details.component';

describe('PublicDataanalistDetailsComponent', () => {
  let component: PublicDataanalistDetailsComponent;
  let fixture: ComponentFixture<PublicDataanalistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDataanalistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDataanalistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
