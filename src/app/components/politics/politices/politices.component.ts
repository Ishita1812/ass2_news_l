import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoliticsService } from 'src/app/services/politics.service';

@Component({
  selector: 'app-politices',
  templateUrl: './politices.component.html',
  styleUrls: ['./politices.component.css']
})
export class PoliticesComponent {
  constructor(
    private service: PoliticsService,
    private activeRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
