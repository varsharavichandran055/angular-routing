import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  public course_id:any;

  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.actRoute.snapshot.params['id'];
    this.course_id=id;
  }

}
