import { Component } from '@angular/core';
import { PoliticsService } from 'src/app/services/politics.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {
  constructor(private politicsService: PoliticsService) {}

  news: any[] = [];

  ngOnInit(): void {
    this.news = this.politicsService.courses;
  }
  onClick()
  {
    alert("Bookmarked Sucessfully");
  }
}
