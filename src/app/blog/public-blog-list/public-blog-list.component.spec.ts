import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBlogListComponent } from './public-blog-list.component';

describe('PublicBlogListComponent', () => {
  let component: PublicBlogListComponent;
  let fixture: ComponentFixture<PublicBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
