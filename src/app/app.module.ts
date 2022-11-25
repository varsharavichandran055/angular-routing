import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactAComponent } from './contact-a/contact-a.component';
import { ContactBComponent } from './contact-b/contact-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContactComponent,
    CoursesDetailComponent,
    PageNotFoundComponent,
    ContactAComponent,
    ContactBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
