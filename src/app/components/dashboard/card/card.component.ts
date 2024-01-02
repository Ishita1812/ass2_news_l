import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private _newser: NewsService, private activeRoute : ActivatedRoute) {}

  News : any;
  NewsId : any = 0;
  ngOnInit(): void {
    this.NewsId = this.activeRoute.snapshot.params['id'];
    this.News = this._newser.News.find((x) => x.id == this.NewsId);
  }
}
