import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {CoursesService} from '../../courses.service';

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.scss']
})
export class CourseTopicsComponent implements OnInit {
  courses: any[];
  capacity: number = 0 ;
  subscription: Subscription;

  constructor(private getCourseList: CoursesService,
              private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.courses = this.getCourseList.getCourses();

    this.subscription = this.getCourseList.progressChanged
      .subscribe(
        (progress: number) => {
          this.capacity = progress;
        }
      );
  }

  saveToNB() {
    this.getCourseList.setNotebookData((window.getSelection().toString()));
  }
}
