import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDevopsDetailsComponent } from './public-devops-details.component';

describe('PublicDevopsDetailsComponent', () => {
  let component: PublicDevopsDetailsComponent;
  let fixture: ComponentFixture<PublicDevopsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDevopsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDevopsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
