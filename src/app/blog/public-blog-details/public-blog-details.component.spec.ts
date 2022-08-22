import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBlogDetailsComponent } from './public-blog-details.component';

describe('PublicBlogDetailsComponent', () => {
  let component: PublicBlogDetailsComponent;
  let fixture: ComponentFixture<PublicBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBlogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
