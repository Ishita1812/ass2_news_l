import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScienceService } from 'src/app/services/science.service';

@Component({
  selector: 'app-sciences',
  templateUrl: './sciences.component.html',
  styleUrls: ['./sciences.component.css']
})
export class SciencesComponent {
  constructor(
    private service: ScienceService,
    private activeRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
