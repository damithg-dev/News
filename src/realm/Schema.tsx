export class RArticle implements ArticleRow {
  static schema = {
    name: 'article',
    primaryKey: 'title',
    properties: {
      author: 'string?',
      title: {type: 'string', indexed: true},
      description: 'string?',
      url: 'string?',
      urlToImage: 'string?',
      publishedAt: {type: 'date', default: new Date()},
      content: 'string?',
    },
  };

  constructor(_article: Article) {
    this.author = _article.author;
    this.title = _article.title;
    this.description = _article.description;
    this.url = _article.articleUrl;
    this.urlToImage = _article.imageUrl;
    this.publishedAt = _article.publishDate;
    this.content = _article.content;
  }

  public author: string;
  public title: string;
  public description: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: Date;
  public content: string;
}
