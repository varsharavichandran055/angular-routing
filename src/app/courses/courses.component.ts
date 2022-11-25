import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  courses=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"ExpressJS"},
    {"id":5,"name":"NodeJS"}
  ]

  ngOnInit(): void {
  }

}
