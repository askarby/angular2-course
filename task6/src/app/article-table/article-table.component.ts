import {Component, Input} from '@angular/core';
import {Article} from "../shared/article.model";

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent {

  @Input()
  public articles: Article[];

  public getPriceColor(subject: Article) {
    return subject.price > -1 ? "green" : "red";
  }

}
