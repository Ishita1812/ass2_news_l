import { Component } from '@angular/core';
import { ScienceService } from 'src/app/services/science.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  constructor(private scienceService: ScienceService) {}

  news: any[] = [];

  ngOnInit(): void {
    this.news = this.scienceService.courses;
  }
  onClick()
  {
    alert("Bookmarked Sucessfully");
  }
}
