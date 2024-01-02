import { Component } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private sportService:SportsService) {}

  news: any[] = [];

  ngOnInit(): void {
    this.news = this.sportService.courses;
  }
  onClick()
  {
    alert("Bookmarked Sucessfully");
  }
}
