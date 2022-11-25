import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAComponent } from './contact-a/contact-a.component';
import { ContactBComponent } from './contact-b/contact-b.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/courses',pathMatch:'full'},
  {path:'courses',component:CoursesComponent},
  //to display the route parameter
  {path:'courses/:id',component:CoursesDetailComponent},
  {path:'contact',component:ContactComponent,
//Child route
  children:[
    {path:'contact-a',component:ContactAComponent},
    {path:'contact-b',component:ContactBComponent}
  ]

},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
