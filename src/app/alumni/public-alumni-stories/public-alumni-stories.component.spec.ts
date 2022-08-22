import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAlumniStoriesComponent } from './public-alumni-stories.component';

describe('PublicAlumniStoriesComponent', () => {
  let component: PublicAlumniStoriesComponent;
  let fixture: ComponentFixture<PublicAlumniStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAlumniStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAlumniStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
