import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from '../../../courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courses: any;
  @Input() index: number;
  hide: boolean;
  status: boolean;
  progressBtnLabel: string = 'я не выучиль';

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.hide = true;
    this.status = true;
  }

  switchContent(){
    this.hide = !this.hide;
  }

  updateProgress() {
    console.log('ya sdelal!', (100 / this.courseService.getCourses().length));
    this.courseService.updateCourseProgress(this.status, (100 / this.courseService.getCourses().length));
    if (this.status){
      this.progressBtnLabel = 'я выучиль!';
    } else {this.progressBtnLabel = 'я не выучиль';}
    this.status = !this.status;
  }

}
