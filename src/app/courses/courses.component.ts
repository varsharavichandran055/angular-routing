import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router) { }

  courses=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"ExpressJS"},
    {"id":5,"name":"NodeJS"}
  ]

  onSelect(courses:any){
  this.router.navigate(['/courses',courses.id]);
  }

  ngOnInit(): void {
  }

}
