import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AppRoutingModule } from './app-routes.module';
import { CourseTopicsComponent } from './courses/course-topics/course-topics.component';
import { CourseItemComponent } from './courses/course-topics/course-item/course-item.component';
import { CourseNotebookComponent } from './courses/course-notebook/course-notebook.component';
import {CoursesService} from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    DiscussionsComponent,
    CourseTopicsComponent,
    CourseItemComponent,
    CourseNotebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
