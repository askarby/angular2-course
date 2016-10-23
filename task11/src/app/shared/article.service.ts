import { Injectable } from '@angular/core';
import { Article } from './article.model';

const KEY = "articles";

@Injectable()
export class ArticleService {
  private storage: Storage;
  private articles: Article[];

  constructor() {
    this.storage = localStorage;
    this.articles = JSON.parse(this.storage.getItem(KEY)) || [];
  }

  public add(article: Article) {
    this.articles.push(article);
    this.storage.setItem(KEY, JSON.stringify(this.articles));
  }

  public getAll(): Article[] {
    return [ ... this.articles ];
  }

}
