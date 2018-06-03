import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNotebookComponent } from './course-notebook.component';

describe('CourseNotebookComponent', () => {
  let component: CourseNotebookComponent;
  let fixture: ComponentFixture<CourseNotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
