import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { CoursesComponent } from "./courses/courses.component";
import { DiscussionsComponent } from "./discussions/discussions.component";


const router: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},
  {path: 'discussions', component: DiscussionsComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
