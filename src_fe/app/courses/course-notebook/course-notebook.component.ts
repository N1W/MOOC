import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../courses.service';

@Component({
  selector: 'app-course-notebook',
  templateUrl: './course-notebook.component.html',
  styleUrls: ['./course-notebook.component.scss']
})
export class CourseNotebookComponent implements OnInit {
  notes: any[];

  constructor(private getNotesService: CoursesService) { }

  ngOnInit() {
    this.notes = [];
  }

  newNote() {
    console.log(this.getNotesService.getNotebookData());
    this.notes.push(this.getNotesService.getNotebookData());
  }

}
