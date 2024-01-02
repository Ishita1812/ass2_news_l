import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  constructor(
    private service: SportsService,
    private activeRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
