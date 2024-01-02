import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _newsser: NewsService) {}
  News : any[] = [];

  ngOnInit(): void {
    this.News = this._newsser.News;
  }
  onClick()
  {
    alert("Bookmarked Sucessfully");
  }
}
