import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CoursesService {
  progressChanged = new Subject<number>();

  courses: any[] = [
    {title: 'Chapter1',
    content: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem ' +
    'loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem'},
    {title: 'Chapter2',
      content: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem ' +
      'loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem'},
    {title: 'Chapter3',
      content: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem ' +
      'loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem'}
  ];
  toNotebook: any;
  progress: number = 0;

  constructor() { }

  getCourses(){
    return this.courses.slice();
  }

  setNotebookData(data){
    this.toNotebook = data;
    console.log(this.toNotebook);
  }

  getNotebookData() {
    return this.toNotebook;
  }

  updateCourseProgress(status, value) {
    if (status) {
      this.progress = this.progress + value;
    } else {this.progress = this.progress - value;}
    if (this.progress >  100) {
      this.progress = 100;
    }

    console.log(this.progress);

    this.progressChanged.next(this.progress);
  }
}
